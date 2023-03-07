import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../../../../store/reducers/ordersReducer';

import { Button, ListItem, UnorderedList } from '@chakra-ui/react';

import './index.scss';

function CouriersOrder({ order }) {
  const restaurant = useSelector((state) =>
    state.restaurants.list.find(
      (restaurant) => restaurant.id === order.restaurantId
    )
  );

  return (
    <div className="couriers-order">
      <div className="couriers-order__head">
        <p className="couriers-order__title">Order #{order.id}</p>
      </div>

      <ul className="couriers-order__info info-list">
        <li>
          <span>Restaurant address:</span> {restaurant.address}
        </li>
        <li>
          <span>Customer address:</span> {order.customer.address}
        </li>
        <li>
          <span>Distance to restaurant:</span> {order.distanceToRestaurant} km
        </li>
        <li>
          <span>Distance to customer:</span> {order.distanceToCustomer} km
        </li>
      </ul>

      <UnorderedList>
        <ListItem className="order-card">
          <div className="order-card__content">
            <p className="order-card__title">John Smith</p>

            <ul className="order-card__list">
              <li>Time to pick-up: 5 min</li>
              <li>Time to delivery: 45 min</li>
              <li>Rating: 5 ☆</li>
            </ul>
          </div>

          <div className="order-card__nav">
            <Button colorScheme="green" size="lg">
              Accept
            </Button>
          </div>
        </ListItem>
        <ListItem className="order-card">
          <div className="order-card__content">
            <p className="order-card__title">Jane Doe</p>

            <ul className="order-card__list">
              <li>Time to pick-up: 8 min</li>
              <li>Time to delivery: 35 min</li>
              <li>Rating: 4.5 ☆</li>
            </ul>
          </div>

          <div className="order-card__nav">
            <Button colorScheme="green" size="lg">
              Accept
            </Button>
          </div>
        </ListItem>
      </UnorderedList>
    </div>
  );
}

export default CouriersOrder;
