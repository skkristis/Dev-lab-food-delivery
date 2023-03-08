import { Box, Center, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import { useInfiniteQuery } from 'react-query';

import { addToRestaurantList } from '../../../../store/reducers/restaurantsClientReducer';
import RestaurantListCard from '../RestaurantListCard';
import merchantService from '../../../../services/merchantService';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function RestaurantList({ selectedCategory }) {
  console.log(selectedCategory);
  const {
    data: fetchedRestaurantData,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ['restaurants', '/filter_equals_type=restaurant'],
    merchantService.getRestaurantList,
    {
      getNextPageParam: (lastPage) =>
        lastPage.links.next?.split('merchants?')[1] ?? 'no-next-page',
    }
  );

  const { ref, inView } = useInView();

  let restaurantsList = useSelector((state) => state.restaurantsClient.list);

  const dispatch = useDispatch();
  const dispatchAdd = (restaurants) =>
    dispatch(addToRestaurantList(restaurants));

  useEffect(() => {
    if (!isFetching && !isFetchingNextPage && hasNextPage) fetchNextPage();
  }, [inView]);

  useEffect(() => {
    const data =
      fetchedRestaurantData?.pages[fetchedRestaurantData?.pages.length - 1]
        .data;
    const existCheck = restaurantsList.filter(
      (restaurant) => restaurant.id === data[0].id
    );

    if (data && !existCheck.length) dispatchAdd(data);
  }, [fetchedRestaurantData?.pages.length]);

  if (selectedCategory) {
    restaurantsList = restaurantsList.filter((restaurant) =>
      restaurant.restaurantTags.includes(selectedCategory)
    );
  }

  return (
    <Box as="section" className="container">
      {selectedCategory ? (
        <Heading>{selectedCategory.name} restaurants</Heading>
      ) : (
        <Heading>All restaurants</Heading>
      )}
      <Flex
        flexWrap="wrap"
        gap="2"
        justifyContent="space-between"
        marginTop="10px"
      >
        {restaurantsList.length ? (
          restaurantsList.map((restaurant) => {
            return (
              <RestaurantListCard key={restaurant.id} restaurant={restaurant} />
            );
          })
        ) : (
          <Text
            display={isFetching ? 'none' : 'block'}
            textAlign="center"
            width="100%"
          >
            No restaurants available
          </Text>
        )}
      </Flex>

      <Box ref={ref} bg="transparent"></Box>

      {(isFetching || isFetchingNextPage) && (
        <Center marginTop="20px">
          <Spinner size="xl" />
        </Center>
      )}
    </Box>
  );
}

export default RestaurantList;
