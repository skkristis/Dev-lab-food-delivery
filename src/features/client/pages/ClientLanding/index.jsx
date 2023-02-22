import { Flex } from '@chakra-ui/react';
import React from 'react';
import './index.css';

import Hero from '../../components/Hero/Hero';
import Categories from '../../components/Categories/Categories';
import RestaurantList from '../../components/RestaurantList';

function ClientLanding() {
  return (
    <Flex as="section" flexDir="column" gap="20px">
      <Hero />
      <Categories />
      <RestaurantList />
    </Flex>
  );
}

export default ClientLanding;
