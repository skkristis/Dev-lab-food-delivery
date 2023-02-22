import React from 'react';

import RestaurantPromo1 from './RestaurantPromo1';
import RestaurantPromo2 from './RestaurantPromo2';
import Subscriptions from './Subscriptions';
import { ChakraProvider, Box } from '@chakra-ui/react';
import SubmitForm from './SubmitForm';
import './index.scss';

function RestaurantSignUp() {
  return (
    <ChakraProvider>
      <RestaurantPromo1 />
      <RestaurantPromo2 />
      <Subscriptions />
      <SubmitForm />
    </ChakraProvider>
  );
}

export default RestaurantSignUp;
