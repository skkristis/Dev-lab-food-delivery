import { Box, Flex, Heading } from '@chakra-ui/react';

import { restaurants } from '../../mocks/restaurantsMock';
import RestaurantListCard from '../RestaurantListCard';

function RestaurantList({ isFeatured }) {
  const restaurantsList = isFeatured
    ? restaurants.filter((item) => item.featured)
    : restaurants;

  return (
    <Box as="section" className="container">
      <Heading>{isFeatured ? 'Featured' : 'All'} Restaurants</Heading>
      <Flex
        flexWrap="wrap"
        gap="2"
        justifyContent="space-between"
        marginTop="10px"
      >
        {restaurantsList.map((restaurant, i) => {
          return <RestaurantListCard key={i} restaurant={restaurant} />;
        })}
      </Flex>
    </Box>
  );
}

export default RestaurantList;
