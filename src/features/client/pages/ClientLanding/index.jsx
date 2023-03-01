import { Flex } from '@chakra-ui/react';
import React from 'react';
import './index.css';

import Discovery from '../../components/Discovery';
import RestaurantList from '../../components/RestaurantList';
import FilterByCategory from '../../components/FilterByCategory';

function ClientLanding() {
  return (
    <Flex as="section" flexDir="column" gap="20px">
      <FilterByCategory
        items={[
          { icon: '🍝 ', name: 'Restaurants' },
          { icon: '🛒 ', name: 'Grocery' },
          { icon: '🎉 ', name: 'Offers' },
        ]}
      />
      <FilterByCategory
        items={[
          { icon: '🍟 ', name: 'Fast Food' },
          { icon: '🍰 ', name: 'Desserts' },
          { icon: '🍿 ', name: 'Snacks' },
          { icon: '☕️ ', name: 'Coffee' },
          { icon: '🥞 ', name: 'Breakfast' },
          { icon: '🥪 ', name: 'Sandwiches' },
          { icon: '🍗 ', name: 'Chicken' },
          { icon: '🍔 ', name: 'Burgers' },
        ]}
        categoryId={'scroll2'}
      />
      <Discovery />
      <RestaurantList />
    </Flex>
  );
}

export default ClientLanding;
