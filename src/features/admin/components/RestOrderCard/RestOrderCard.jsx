import React from 'react';

import './RestOrderCard.scss';

function RestOrderCard({ order, setActive }) {
  const handleClick = () => setActive(order);

  return (
    <div className="rest-ordercard" onClick={handleClick}>
      <p className="rest-ordercard__title">Order #{order.id}</p>
      <p className="rest-ordercard__payment">
        {order.payment.total} EUR by {order.payment.method}
      </p>
    </div>
  );
}

export default RestOrderCard;
