import React from 'react';
import { useSelector } from 'react-redux';

import {
  Box,
  Alert,
  AlertIcon,
  Text,
  UnorderedList,
  ListItem,
  Image,
  Center,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';

import './CustomerOrderStatus.scss';
import { useLocation } from 'react-router';

function CustomerOrderStatus() {
  const location = useLocation();
  const { orderTotal, payMethod } = location.state;
  const cartItems = useSelector((store) => store.cart.list);
  const customerInfo = useSelector((store) => store.customer);
  const primaryAddress = customerInfo.addressBook.filter(
    (addy) => addy.primary
  )[0];
  const deliveryAddress = `${primaryAddress.street} ${primaryAddress.building}-${primaryAddress.apartment}, ${primaryAddress.city}`;

  const statusMessage = (status) => {
    switch (status) {
      case 'accepted':
        return 'Your order has been accepted.';
      case 'preparing':
        return 'Your order is being prepared.';
      case 'ready':
        return 'Your order is prepared. A courier will pick it up soon.';
      case 'delivering':
        return 'Your order is out for delivery.';
      case 'completed':
        return 'Enjoy your meal!';
    }
  };

  return (
    <Box position="relative" className="container order-status">
      <Alert status="info" variant="subtle" className="order-status__alert">
        <AlertIcon boxSize="50px" mr={0} />
        <Text className="order-status__title">
          {`Order is being prepared! Nr. 12983123789`}
        </Text>

        <Text className="order-status__message">
          Thanks for choosing our service!
        </Text>
      </Alert>
      <Center>
        <CircularProgress value={80} size="240px">
          <CircularProgressLabel fontSize="22px">
            delivering
          </CircularProgressLabel>
        </CircularProgress>
      </Center>

      <Box className="order-status__details order-details" mt="50px">
        <Box className="order-details__info">
          <Text className="order-details__title">Order details:</Text>
          <UnorderedList className="order-details__list">
            <ListItem>
              <Box as="span">Customer:</Box>
              {`${customerInfo.firstName} ${customerInfo.lastName}`}
            </ListItem>
            <ListItem>
              <Box as="span">Delivery address:</Box> {deliveryAddress}
            </ListItem>
            <ListItem>
              <Box as="span">Payment:</Box> {orderTotal} EUR by {payMethod}
            </ListItem>
          </UnorderedList>
        </Box>

        <Box className="order-details__dishes dish-list">
          <Text className="order-details__title">Selected dishes:</Text>
          <UnorderedList className="dish-list__values">
            {cartItems.map((dish, index) => (
              <ListItem key={dish.id} className="dish-list__item">
                <Box className="dish-list__image">
                  <Image
                    src={dish.recipeThumb}
                    alt={`${dish.recipeName} image`}
                  />
                </Box>
                <Text>
                  {index + 1}. {dish.recipeName}{' '}
                  <Box as="span">({dish.quantity} pcs.)</Box>
                </Text>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
}

export default CustomerOrderStatus;
