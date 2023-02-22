import React from "react";

import { Button } from "@chakra-ui/react";

import "./CouriersOrderCard.scss";

function CouriersOrderCard({ order, setActive }) {
  const handleClick = () => {
    setActive({ ...order, status: "active" });
  };

  return (
    <div className="order-card">
      <div className="order-card__content">
        <p className="order-card__title">Order #{order.id}</p>

        <ul className="order-card__list">
          <li>
            Restaurant: <strong>{order.restaurant.name}</strong>,{" "}
            {order.restaurant.address}
          </li>
          <li>
            Customer: <strong>{order.customer.name}</strong>,{" "}
            {order.customer.address}
          </li>
          <li>Distance to restaurant: {order.distance} km</li>
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
