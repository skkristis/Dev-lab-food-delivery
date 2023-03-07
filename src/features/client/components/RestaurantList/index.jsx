import { Box, Flex, Heading, Spinner } from '@chakra-ui/react';
import { useQuery } from 'react-query';

import { restaurants } from '../../mocks/restaurantsMock';
import RestaurantListCard from '../RestaurantListCard';
import RestaurantService from '../../../../services/RestaurantService';

function RestaurantList({ isFeatured, selectedCategory }) {
  const { isLoading, data } = useQuery(
    'restaurantListLanding',
    RestaurantService.getRestaurantList
  );

  let restaurantsList = isFeatured
    ? restaurants.filter((item) => item.featured)
    : restaurants;

  if (selectedCategory && selectedCategory !== 'All') {
    restaurantsList = restaurantsList.filter((restaurant) =>
      restaurant.restaurantTags.includes(selectedCategory)
    );
  }

  return (
    <Box as="section" className="container">
      {selectedCategory ? (
        <Heading>{selectedCategory} restaurants</Heading>
      ) : (
        <Heading>All restaurants</Heading>
      )}
      <Flex
        flexWrap="wrap"
        gap="2"
        justifyContent="space-between"
        marginTop="10px"
      >
        {isLoading ? (
          <Spinner />
        ) : (
          data?.data.map((restaurant) => {
            return (
              <RestaurantListCard key={restaurant.id} restaurant={restaurant} />
            );
          })
        )}
      </Flex>
    </Box>
  );
}

export default RestaurantList;
