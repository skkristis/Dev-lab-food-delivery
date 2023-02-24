import React from 'react';

import './RestaurantOrderCard.scss';

function RestaurantOrderCard({ order, setActive }) {
  const handleClick = () => setActive(order);

  return (
    <div className="restaurant-ordercard" onClick={handleClick}>
      <p className="restaurant-ordercard__title">Order #{order.id}</p>
      <p className="restaurant-ordercard__payment">
        {order.payment.total} EUR by {order.payment.method}
      </p>
    </div>
  );
}

export default RestaurantOrderCard;
