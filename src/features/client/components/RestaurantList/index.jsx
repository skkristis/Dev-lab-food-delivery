import { Box, Flex, Heading } from '@chakra-ui/react';

import { restaurants } from '../../mocks/restaurants';
import RestaurantListCard from '../RestaurantListCard';

function RestaurantList() {
  return (
    <Box as="section" className="container">
      <Heading>All Restaurants</Heading>
      <Flex
        flexWrap="wrap"
        gap="2"
        justifyContent="space-between"
        marginTop="10px"
      >
        {restaurants.map((restaurant, i) => {
          return <RestaurantListCard key={i} restaurant={restaurant} />;
        })}
      </Flex>
    </Box>
  );
}

export default RestaurantList;
