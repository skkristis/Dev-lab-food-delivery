import { Box, Center, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import { useInfiniteQuery } from 'react-query';

import RestaurantListCard from '../RestaurantListCard';
import merchantService from '../../../../services/merchantService';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function RestaurantList({ selectedCategory, currentMerchantType }) {
  const { ref, inView } = useInView();

  const {
    data: fetchedRestaurantData,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    [
      'merchants',
      {
        filter_equals_type: currentMerchantType,
        filter_equals_categoryId: selectedCategory?.id || null,
      },
    ],
    merchantService.getMerchantList,
    {
      getNextPageParam: (lastPage) =>
        lastPage?.links.next?.split('merchants?')[1] ?? undefined,
    }
  );

  const [restaurantsList, setRestaurantsList] = useState(
    fetchedRestaurantData?.pages.reduce((acc, cur) => {
      return [...acc, ...[cur.data ? cur.data : []]];
    }, []) || []
  );
  const latestFetchedRestaurantList =
    fetchedRestaurantData?.pages[fetchedRestaurantData?.pages?.length - 1].data;

  // check if in view
  useEffect(() => {
    if (!isFetching && !isFetchingNextPage && hasNextPage) fetchNextPage();
  }, [inView]);

  // clear list on change of query params
  useEffect(() => {
    setRestaurantsList([]);
  }, [selectedCategory, currentMerchantType]);

  // save on successful fetch
  useEffect(() => {
    const restaurantDoesExist = restaurantsList?.filter(
      (restaurant) => restaurant?.id === latestFetchedRestaurantList?.[0]?.id
    );

    setRestaurantsList((prevList = []) => {
      if (restaurantDoesExist) return latestFetchedRestaurantList;

      return [...prevList, ...latestFetchedRestaurantList];
    });
  }, [
    fetchedRestaurantData?.pages[fetchedRestaurantData?.pages?.length - 1]
      .data[0],
  ]);

  return (
    <Box as="section" className="container">
      {selectedCategory ? (
        <Heading>{`${selectedCategory.name} ${currentMerchantType}s`}</Heading>
      ) : (
        <Heading>{`All ${currentMerchantType}s`}</Heading>
      )}
      <Flex
        flexWrap="wrap"
        gap="2"
        justifyContent="space-between"
        marginTop="10px"
      >
        {restaurantsList?.length ? (
          restaurantsList.map((restaurant) => {
            return (
              <RestaurantListCard
                key={restaurant?.id}
                restaurant={restaurant}
              />
            );
          })
        ) : (
          <>
            {(isFetching || isFetchingNextPage) && (
              <Center marginTop="20px" width="100%">
                <Spinner size="xl" />
              </Center>
            )}
            {!latestFetchedRestaurantList?.length && (
              <Text
                display={isFetching ? 'none' : 'block'}
                textAlign="center"
                width="100%"
              >
                No {currentMerchantType}s available
              </Text>
            )}
          </>
        )}
      </Flex>

      <Box ref={ref} bg="transparent"></Box>
    </Box>
  );
}

export default RestaurantList;
