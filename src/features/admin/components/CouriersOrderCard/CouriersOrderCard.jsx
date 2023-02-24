import React from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@chakra-ui/react';

import './CouriersOrderCard.scss';

function CouriersOrderCard({ order, setActive }) {
  const restaurant = useSelector((state) =>
    state.restaurants.list.find(
      (restaurant) => restaurant.id === order.restaurantId
    )
  );

  const handleClick = () => {
    setActive({ ...order, status: 'active' });
  };

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
        <Button colorScheme="green" size="lg" onClick={handleClick}>
          Accept
        </Button>
      </div>
    </div>
  );
}

export default CouriersOrderCard;
