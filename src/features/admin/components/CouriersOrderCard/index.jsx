import React from 'react';
import { useSelector } from 'react-redux';

import { Button, useDisclosure } from '@chakra-ui/react';

import './index.scss';
import CourierSelectionModal from '../CourierSelectionModal';

function CouriersOrderCard({ order }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const restaurant = useSelector((state) =>
    state.restaurants.list.find(
      (restaurant) => restaurant.id === order.restaurantId
    )
  );

  return (
    <div className="order-card">
      <div className="order-card__content">
        <p className="order-card__title">Order #{order.id}</p>

        <ul className="order-card__list">
          <li>
            Restaurant: <strong>{restaurant.name}</strong>, {restaurant.address}
          </li>
          <li>
            Customer: <strong>{order.customer.name}</strong>,{' '}
            {order.customer.address}
          </li>
          <li>Distance to restaurant: {order.distanceToRestaurant} km</li>
          <li>Distance to customer: {order.distanceToCustomer} km</li>
        </ul>
      </div>

      <div className="order-card__nav">
        <Button onClick={onOpen} colorScheme="green" size="lg">
          Accept
        </Button>
      </div>

      <CourierSelectionModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default CouriersOrderCard;
