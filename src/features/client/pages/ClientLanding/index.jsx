import { Flex } from '@chakra-ui/react';
import React from 'react';
import './index.css';

import Discovery from '../../components/Discovery';
import RestaurantList from '../../components/RestaurantList';
import FilterByCategory from '../../components/FilterByCategory';
import { categoryFilter, itemsFilter } from '../../../../constants';

function ClientLanding() {
  return (
    <Flex as="section" flexDir="column" gap="20px">
      <FilterByCategory items={categoryFilter} />
      <FilterByCategory items={itemsFilter} categoryId={'scroll2'} />
      <Discovery />
      <RestaurantList />
    </Flex>
  );
}

export default ClientLanding;
