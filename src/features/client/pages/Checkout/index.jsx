import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Select,
  Stack,
  Switch,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Center,
} from '@chakra-ui/react';
import { checkoutMock, payingOptions } from '../../mocks/checkoutMock';
import bicycleUrl from '../../../../assets/bicycle-icon.svg';
import { useNavigate } from 'react-router-dom';
import SwedbankUrl from '../../../../assets/swedbank-icon.png';
import PayseraUrl from '../../../../assets/paysera-icon.png';
import CardUrl from '../../../../assets/card-icon.svg';
import { useState } from 'react';

function Checkout() {
  const [payMethod, setPayMethod] = useState('Swedbank');

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const { isOpen, onOpen, onClose } = useDisclosure();

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
        gridTemplateColumns="50% 15% 35%"
        paddingTop="50px"
      >
        <Stack spacing="20px">
          <Stack spacing={3}>
            <Heading fontSize="28px">Delivery method and time</Heading>
            <Flex
              padding="10px 20px"
              border="1px solid lightgray"
              rounded="md"
              gap="10px"
              marginTop="20px"
            >
              <Image src={bicycleUrl} width="30px" />
              <Select variant="unstyled">
                {checkoutMock?.customerAddresses &&
                  checkoutMock.customerAddresses.map((address) => {
                    return (
                      <option key={address} value={address}>
                        {address}
                      </option>
                    );
                  })}
              </Select>
            </Flex>
            <FormControl
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="10px 20px"
              border="1px solid lightgray"
              rounded="md"
            >
              <FormLabel
                htmlFor="no-contact-delivery"
                mb="0"
                fontWeight="normal"
                fontSize="18px"
                lineHeight="24px"
              >
                No-contact Delivery
                <br />
                <Box
                  as="span"
                  fontWeight="light"
                  fontSize="15px"
                  letterSpacing="-0.2px"
                  color="blackAlpha.600"
                >
                  Please leave the order in front of my door
                </Box>
              </FormLabel>
              <Switch id="no-contact-delivery" />
            </FormControl>
          </Stack>
          <Stack spacing={3}>
            <Heading fontSize="28px">Selected items</Heading>
            <Stack>
              {checkoutMock?.cartItems &&
                checkoutMock.cartItems.map((dish, i) => {
                  const itemTotal = +dish.dishPrice * +dish.dishQuantity;

                  return (
                    <Flex
                      key={i}
                      marginBottom="10px"
                      justifyContent="space-between"
                    >
                      <Flex>
                        <Box
                          overflow="hidden"
                          rounded="md"
                          height="60px"
                          width="20%"
                          marginRight="10px"
                        >
                          <Image
                            src={dish.dishThumb}
                            marginRight="10px"
                            rounded="md"
                          />
                        </Box>
                        <Box>
                          <Heading fontSize="16px">{dish.dishName}</Heading>
                          <Text
                            fontSize="14px"
                            marginTop="10px"
                            color="blue.400"
                          >
                            €{itemTotal}
                          </Text>
                        </Box>
                      </Flex>
                      <Button>{dish.dishQuantity}</Button>
                    </Flex>
                  );
                })}
              <Button onClick={goBack}>Add more items</Button>
            </Stack>
          </Stack>
          <Stack spacing={3}>
            <Heading fontSize="28px">Payment details</Heading>
            <Flex
              padding="10px 20px"
              border="1px solid lightgray"
              rounded="md"
              gap="10px"
              marginTop="20px"
            >
              <Image src={CardUrl} width="30px" />
              <Select
                variant="unstyled"
                onChange={(e) => {
                  setPayMethod(e.target.value);
                }}
              >
                {payingOptions.map((payOption) => {
                  return (
                    <option
                      key={payOption.payingService}
                      value={payOption.payingService}
                    >
                      {payOption.payingService}
                    </option>
                  );
                })}
              </Select>
            </Flex>
          </Stack>
        </Stack>
        <Stack
          gridColumn="3"
          width="100%"
          spacing="20px"
          padding="15px"
          height="fit-content"
          border="1px solid lightgray"
          rounded="md"
        >
          <Flex gap="5px">
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
          <Button color="white" bg="blue.400" onClick={onOpen}>
            Click to order
          </Button>
        </Stack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader marginTop="30vh" textAlign="center">
            <Flex justifyContent="center" gap="10px">
              <Image
                src={payMethod === 'Swedbank' ? SwedbankUrl : PayseraUrl}
                width="30px"
              />
              <Text>Payment window</Text>
            </Flex>
          </ModalHeader>
          <ModalBody center>
            <Center>
              <Flex gap="20px">
                <Stack
                  padding="10px 20px"
                  border="1px solid lightgray"
                  rounded="md"
                >
                  <Heading fontSize="16px">Order nr.: 1856715813</Heading>
                  <Text>Total: {orderTotal} EUR</Text>
                  <Heading fontSize="16px">Merchant:</Heading>
                  <Text>Name: BestFoodDelivery, UAB</Text>
                </Stack>
                <Stack>
                  <Button onClick={() => navigate('/order-status')}>
                    Accept
                  </Button>
                  <Button
                    onClick={() => {
                      onClose();
                      alert('something went wrong!');
                    }}
                  >
                    Decline
                  </Button>
                </Stack>
              </Flex>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Checkout;
