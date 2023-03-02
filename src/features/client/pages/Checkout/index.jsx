import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { checkoutMock, payingOptions } from '../../mocks/checkoutMock';
import SwedbankUrl from '../../../../assets/swedbank-icon.png';
import PayseraUrl from '../../../../assets/paysera-icon.png';
import bicycleUrl from '../../../../assets/bicycle-icon.svg';

import PaymentModal from '../../components/PaymentModal';
import OrderParametersModal from '../../components/OrderParametersModal';
import CheckoutItemCard from '../../components/CheckoutItemCard';
import CheckoutContactCheck from '../../components/CheckoutContactCheck';

function Checkout() {
  const [payMethod, setPayMethod] = useState('Swedbank');
  const [deliveryAddress, setDeliveryAddress] = useState(
    checkoutMock.customerAddresses[0]
  );

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const {
    isOpen: paymentIsOpen,
    onOpen: paymentOnOpen,
    onClose: paymentOnClose,
  } = useDisclosure();

  const {
    isOpen: deliveryAddressIsOpen,
    onOpen: deliveryAddressOnOpen,
    onClose: deliveryAddressOnClose,
  } = useDisclosure();
  const {
    isOpen: paymentOptionIsOpen,
    onOpen: paymentOptionOnOpen,
    onClose: paymentOptionOnClose,
  } = useDisclosure();

  const orderSubtotal = checkoutMock.cartItems.reduce((acc, cur) => {
    return +cur.dishPrice * +cur.dishQuantity + acc;
  }, 0);
  const orderTotal =
    +orderSubtotal +
    +checkoutMock.deliveryPrice +
    +checkoutMock.serviceFee +
    +checkoutMock.smallOrderFee;

  return (
    <Box as="section">
      <Box height="40vh" bg="lightgray">
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
            {checkoutMock.restaurantName} ({checkoutMock.restaurantAddress})
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
        <Stack spacing="20px">
          <Stack spacing={3}>
            <Heading fontSize="28px">Delivery method and time</Heading>
            <Button
              variant="outline"
              onClick={deliveryAddressOnOpen}
              display="flex"
              justifyContent="space-between"
            >
              <Image src={bicycleUrl} width="30px" />
              <Text>{deliveryAddress}</Text>
              <ChevronRightIcon />
            </Button>

            <CheckoutContactCheck />

            <OrderParametersModal
              isOpen={deliveryAddressIsOpen}
              onClose={deliveryAddressOnClose}
              header="Delivery method and time"
              options={checkoutMock.customerAddresses}
              setStateFn={setDeliveryAddress}
            />
          </Stack>

          <Stack spacing={3}>
            <Heading fontSize="28px">Selected items</Heading>
            <Stack>
              {checkoutMock?.cartItems &&
                checkoutMock.cartItems.map((dish, i) => {
                  return <CheckoutItemCard dish={dish} key={i} />;
                })}
              <Button onClick={goBack}>Add more items</Button>
            </Stack>
          </Stack>

          <Stack spacing={3}>
            <Heading fontSize="28px">Payment details</Heading>

            <Button
              variant="outline"
              onClick={paymentOptionOnOpen}
              display="flex"
              justifyContent="space-between"
            >
              <Image
                src={payMethod === 'Swedbank' ? SwedbankUrl : PayseraUrl}
                width="30px"
              />
              <Text>{payMethod}</Text>
              <ChevronRightIcon />
            </Button>

            <OrderParametersModal
              isOpen={paymentOptionIsOpen}
              onClose={paymentOptionOnClose}
              header="Payment option"
              options={payingOptions}
              setStateFn={setPayMethod}
            />
          </Stack>
        </Stack>

        <Stack
          gridColumn={{ base: '1', lg: '3' }}
          width="100%"
          spacing="20px"
          padding="15px"
          height="fit-content"
          border="1px solid lightgray"
          rounded="md"
        >
          <Flex gap="5px" alignItems="center">
            <Heading fontSize="28px">Prices in EUR, incl. taxes</Heading>
            <Button
              color="blue.400"
              rounded="full"
              border="1px solid #4299e1"
              fontSize="14px"
              padding="3px 10px"
              height="fit-content"
              minWidth="fit-content"
              variant="ghost"
              display="inline-block"
            >
              i
            </Button>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Item subtotal</Text>
            <Text>{orderSubtotal}</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Delivery ({checkoutMock.deliveryDistance})</Text>
            <Text>{checkoutMock.deliveryPrice}</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Service fee</Text>
            <Text>{checkoutMock.serviceFee}</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Small order fee</Text>
            <Text>{checkoutMock.smallOrderFee}</Text>
          </Flex>
          <Divider />
          <Flex justifyContent="space-between">
            <Text>Total sum</Text>
            <Text>{orderTotal}</Text>
          </Flex>
          <Button
            position="sticky"
            color="white"
            bg="blue.400"
            onClick={paymentOnOpen}
          >
            Click to order
          </Button>
        </Stack>
      </Box>

      <PaymentModal
        paymentIsOpen={paymentIsOpen}
        paymentOnClose={paymentOnClose}
        payMethod={payMethod}
        orderTotal={orderTotal}
      />
    </Box>
  );
}

export default Checkout;
