import { Flex } from '@chakra-ui/react';
import React from 'react';
import './index.css';

import Discovery from '../../components/Discovery';
import RestaurantList from '../../components/RestaurantList';
import FilterByCategory from '../../components/FilterByCategory';

function ClientLanding() {
  return (
    <Flex as="section" flexDir="column" gap="20px">
      <FilterByCategory items={['Restaurants', 'Grocery', 'Offers']} />
      <FilterByCategory
        items={[
          'Fast Food',
          'Drinks',
          'Desserts',
          'Snacks',
          'Coffee',
          'Breakfast',
          'Sandwiches',
          'Chicken',
          'Burgers',
        ]}
        categoryId={'scroll2'}
      />
      <Discovery />
      <RestaurantList />
    </Flex>
  );
}

export default ClientLanding;
