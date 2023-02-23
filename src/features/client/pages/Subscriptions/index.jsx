import React from 'react';

import RestaurantPromo1 from '../../components/RestaurantSignUp/RestaurantPromo1';
import RestaurantPromo2 from '../../components/RestaurantSignUp/RestaurantPromo2';
import SubscriptionPlans from '../../components/RestaurantSignUp/SubscriptionPlans';
import SubmitForm from '../../components/RestaurantSignUp/SubmitForm';
import { ChakraProvider } from '@chakra-ui/react';
import './index.scss';

function Subscriptions() {
  return (
    <ChakraProvider>
      <RestaurantPromo1 />
      <RestaurantPromo2 />
      <SubscriptionPlans />
      <SubmitForm />
    </ChakraProvider>
  );
}

export default Subscriptions;
