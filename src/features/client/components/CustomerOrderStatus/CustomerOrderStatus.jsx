import React from 'react';
import { useSelector } from 'react-redux';

import { Box, Alert, AlertIcon } from '@chakra-ui/react';

import './CustomerOrderStatus.scss';

import orders from '../../../admin/mocks/orders';

function CustomerOrderStatus() {
  const order = orders[2];

  const allDishes = useSelector((state) => state.dishes.list);

  const orderDishes = order.dishes.map((dish) => {
    const orderDish = allDishes.find((item) => item.id === dish.id);
    return { ...dish, name: orderDish.name, image: orderDish.image };
  });

  return (
    <Box position="relative" className="container order-status">
      <Alert
        status={order.status === 'fulfilled' ? 'success' : 'info'}
        variant="subtle"
        className="order-status__alert"
      >
        <AlertIcon boxSize="50px" mr={0} />
        <p className="order-status__title">
          {order.status === 'pending' &&
            `Order #${order.id} is being prepared!`}

          {(order.status === 'ready' || order.status === 'delivered') &&
            `Order #${order.id} is being delivered!`}

          {order.status === 'fulfilled' && `Order #${order.id} is fulfilled!`}
        </p>

        <p className="order-status__message">
          Thanks for choosing our service!
        </p>
      </Alert>

      <div className="order-status__details order-details">
        <div className="order-details__info">
          <p className="order-details__title">Order details:</p>
          <ul className="order-details__list">
            <li>
              <span>Customer:</span> {order.customer.name}
            </li>
            <li>
              <span>Delivery address:</span> {order.customer.address}
            </li>
            <li>
              <span>Payment:</span> {order.payment.total} EUR by{' '}
              {order.payment.method}
            </li>
          </ul>
        </div>

        <div className="order-details__dishes dish-list">
          <p className="order-details__title">Selected dishes:</p>
          <ul className="dish-list__values">
            {orderDishes.map((dish, index) => (
              <li key={dish.id} className="dish-list__item">
                <div className="dish-list__image">
                  <img src={dish.image} alt={`${dish.name} image`} />
                </div>
                <p>
                  {index + 1}. {dish.name} <span>({dish.amount} pcs.)</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Box>
  );
}

export default CustomerOrderStatus;
