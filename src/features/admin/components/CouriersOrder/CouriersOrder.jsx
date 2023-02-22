import React from "react";
import { useDispatch } from "react-redux";
import { edit } from "../../../../store/reducers/ordersReducer";

import { Button, ButtonGroup } from "@chakra-ui/react";

import mapImage from "/public/couriers-map.jpg";
import "./CouriersOrder.scss";

function CouriersOrder({ order, setActive }) {
  const dispatch = useDispatch();
  const dispatchEdit = (order) => dispatch(edit(order));

  const changeOrderStatus = (status) => {
    dispatchEdit({ ...order, status });
    setActive(null);
  };

  return (
    <div className="couriers-order">
      <div className="couriers-order__head">
        <p className="couriers-order__title">Order #{order.id}</p>

        <ButtonGroup gap="2">
          <Button
            variant="outline"
            colorScheme="red"
            size="lg"
            onClick={() => changeOrderStatus("pending")}
          >
            Abort order
          </Button>

          <Button
            colorScheme="green"
            size="lg"
            onClick={() => changeOrderStatus("fulfilled")}
          >
            Finish order
          </Button>
        </ButtonGroup>
      </div>

      <ul className="couriers-order__info info-list">
        <li>
          <span>Restaurant:</span> {order.restaurant.name}
        </li>
        <li>
          <span>Restaurant address:</span> {order.restaurant.address}
        </li>
        <li>
          <span>Customer:</span> {order.customer.name}
        </li>
        <li>
          <span>Customer address:</span> {order.customer.address}
        </li>
        <li>
          <span>Distance to restaurant:</span> {order.distance} km
        </li>
        <li>
          <span>Payment:</span> {order.payment.total} EUR by{" "}
          {order.payment.method}
        </li>
      </ul>

      <div className="couriers-order__map">
        <img src={mapImage} alt="Map" />
      </div>
    </div>
  );
}

export default CouriersOrder;
