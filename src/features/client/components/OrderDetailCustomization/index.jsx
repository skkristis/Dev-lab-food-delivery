import {
  Button,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
  Input,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useForm, useWatch } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { paymentsMethods } from '../../../../constants';
import bicycleUrl from '../../../../assets/bicycle-icon.svg';

import OrderParametersModal from '../../components/OrderParametersModal';
import CheckoutItemCard from '../../components/CheckoutItemCard';
import CheckoutContactCheck from '../../components/CheckoutContactCheck';
import { useSelector } from 'react-redux';

import RadioButtonsForPayment from '../RadioButtonsForPayment';

function OrderDetailCustomization({
  payMethod,
  setPayMethod,
  setIsEmailValid,
}) {
  const {
    register,
    formState: { errors },
    control,
  } = useForm({
    mode: 'onChange',
  });

  const email = useWatch({ control, name: 'email' });

  useEffect(() => {
    setIsEmailValid(!errors.email && email);
  }, [email, errors.email]);

  const sessionUser = useSelector((state) => state.user.data);

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
        {sessionUser == null && (
          <>
            <Input
              type="email"
              placeholder="Enter your email address"
              {...register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <Text color="red.500">Please enter a valid email address</Text>
            )}
          </>
        )}
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
              return <CheckoutItemCard dish={dish} key={dish.id} />;
            })}
          <Button onClick={goBack}>Add more items</Button>
        </Stack>
      </Stack>

      <Stack spacing={3}>
        <Heading fontSize="28px">Payment details</Heading>
        <RadioButtonsForPayment
          payMethod={payMethod}
          options={paymentsMethods}
          setStateFn={setPayMethod}
        />
      </Stack>
    </Stack>
  );
}

export default OrderDetailCustomization;
