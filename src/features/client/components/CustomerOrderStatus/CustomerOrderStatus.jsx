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
} from '@chakra-ui/react';

import './CustomerOrderStatus.scss';

import orders from '../../../admin/mocks/orders';

function CustomerOrderStatus() {
  const order = orders[2];

  const allDishes = useSelector((state) => state.dishes.list);

  const orderDishes = order.dishes.map((dish) => {
    const orderDish = allDishes.find((item) => item.id === dish.id);
    return { ...dish, name: orderDish?.name, image: orderDish?.image };
  });

  return (
    <Box position="relative" className="container order-status">
      <Alert
        status={order.status === 'fulfilled' ? 'success' : 'info'}
        variant="subtle"
        className="order-status__alert"
      >
        <AlertIcon boxSize="50px" mr={0} />
        <Text className="order-status__title">
          {order.status === 'pending' &&
            `Order #${order.id} is being prepared!`}

          {(order.status === 'ready' || order.status === 'delivered') &&
            `Order #${order.id} is being delivered!`}

          {order.status === 'fulfilled' && `Order #${order.id} is fulfilled!`}
        </Text>

        <Text className="order-status__message">
          Thanks for choosing our service!
        </Text>
      </Alert>

      <Box className="order-status__details order-details">
        <Box className="order-details__info">
          <Text className="order-details__title">Order details:</Text>
          <UnorderedList className="order-details__list">
            <ListItem>
              <Box as="span">Customer:</Box> {order.customer.name}
            </ListItem>
            <ListItem>
              <Box as="span">Delivery address:</Box> {order.customer.address}
            </ListItem>
            <ListItem>
              <Box as="span">Payment:</Box> {order.payment.total} EUR by{' '}
              {order.payment.method}
            </ListItem>
          </UnorderedList>
        </Box>

        <Box className="order-details__dishes dish-list">
          <Text className="order-details__title">Selected dishes:</Text>
          <UnorderedList className="dish-list__values">
            {orderDishes.map((dish, index) => (
              <ListItem key={dish.id} className="dish-list__item">
                <Box className="dish-list__image">
                  <Image src={dish.image} alt={`${dish.name} image`} />
                </Box>
                <Text>
                  {index + 1}. {dish.name}{' '}
                  <Box as="span">({dish.amount} pcs.)</Box>
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
