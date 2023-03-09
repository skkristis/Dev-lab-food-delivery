import { Box, Heading } from '@chakra-ui/react';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import CheckoutCart from '../../components/CheckoutCart';
import OrderDetailCustomization from '../../components/OrderDetailCustomization';

function Checkout() {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const preferedPayMethod = useSelector(
    (store) => store.customer.payment.prefer
  );
  const [payMethod, setPayMethod] = useState(preferedPayMethod);

  const location = useLocation();
  const { restaurantInfo } = location.state;

  return (
    <Box as="section">
      <Box className="container" paddingTop="50px">
        <Heading fontSize="40px">Checkout</Heading>
        <Heading fontSize="20px">{restaurantInfo.full_name}</Heading>
      </Box>

      <Box
        className="container"
        display="grid"
        gridTemplateColumns={{ base: '100%', lg: '50% 5%  45%' }}
        gap={{ base: '100px', lg: '0' }}
        paddingTop="50px"
      >
        <OrderDetailCustomization
          payMethod={payMethod}
          setPayMethod={setPayMethod}
          setIsEmailValid={setIsEmailValid}
        />

        <CheckoutCart
          deliveryFee={restaurantInfo.delivery_cost}
          payMethod={payMethod}
          isEmailValid={isEmailValid}
        />
      </Box>
    </Box>
  );
}

export default Checkout;
