import {
  Button,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { paymentsMethods } from '../../../../constants';
import bicycleUrl from '../../../../assets/bicycle-icon.svg';

import OrderParametersModal from '../../components/OrderParametersModal';
import CheckoutItemCard from '../../components/CheckoutItemCard';
import CheckoutContactCheck from '../../components/CheckoutContactCheck';
import { useSelector } from 'react-redux';

import RadioButtonsForPayment from '../RadioButtonsForPayment';

function OrderDetailCustomization({ setPayMethod }) {
  const {
    isOpen: deliveryAddressIsOpen,
    onOpen: deliveryAddressOnOpen,
    onClose: deliveryAddressOnClose,
  } = useDisclosure();

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const cartItems = useSelector((store) => store.cart.list);
  const customerInfo = useSelector((store) => store.customer);
  const primaryAddress = customerInfo.addressBook.filter(
    (addy) => addy.primary
  )[0];
  const [deliveryAddress, setDeliveryAddress] = useState(
    `${primaryAddress.street} ${primaryAddress.building}-${primaryAddress.apartment}, ${primaryAddress.city}`
  );

  return (
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
          options={customerInfo.addressBook}
          setStateFn={setDeliveryAddress}
          section="addresses"
        />
      </Stack>

      <Stack spacing={3}>
        <Heading fontSize="28px">Selected items</Heading>
        <Stack>
          {cartItems &&
            cartItems.map((dish) => {
              return <CheckoutItemCard dish={dish} key={dish.recipeName} />;
            })}
          <Button onClick={goBack}>Add more items</Button>
        </Stack>
      </Stack>

      <Stack spacing={3}>
        <Heading fontSize="28px">Payment details</Heading>

        <RadioButtonsForPayment
          options={paymentsMethods}
          setStateFn={setPayMethod}
        />
      </Stack>
    </Stack>
  );
}

export default OrderDetailCustomization;
