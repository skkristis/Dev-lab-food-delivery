import React from "react";

import CouriersOrderCard from "../CouriersOrderCard/CouriersOrderCard";

import "./CouriersOrders.scss";

function CouriersOrders({ orders, setActive }) {
  return (
    <div className="couriers-orders">
      {orders.map((order) => (
        <CouriersOrderCard key={order.id} order={order} setActive={setActive} />
      ))}
    </div>
  );
}

export default CouriersOrders;
