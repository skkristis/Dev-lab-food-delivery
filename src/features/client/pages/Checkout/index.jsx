import { Box, Heading, Image } from '@chakra-ui/react';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import checkoutMap from '../../../../assets/checkout-map.png';

import CheckoutCart from '../../components/CheckoutCart';
import OrderDetailCustomization from '../../components/OrderDetailCustomization';

function Checkout() {
  const preferedPayMethod = useSelector(
    (store) => store.customer.payment.prefer
  );
  const [payMethod, setPayMethod] = useState(preferedPayMethod);

  return (
    <Box as="section">
      <Box height="30vw" position="relative" overflow="hidden">
        <Image src={checkoutMap} position="absolute" width="100%" />
        <Box className="container" position="relative" height="100%">
          <Heading
            position="absolute"
            left="20px"
            bottom="70px"
            fontSize="40px"
          >
            Checkout
          </Heading>
          <Heading
            position="absolute"
            left="20px"
            bottom="40px"
            fontSize="20px"
          >
            Jammi (Tauro Kalnas)
          </Heading>
        </Box>
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
        />

        <CheckoutCart payMethod={payMethod} />
      </Box>
    </Box>
  );
}

export default Checkout;
