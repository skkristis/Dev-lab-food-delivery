import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import RestOrdersNav from '../RestOrdersNav/RestOrdersNav';
import RestOrderCard from '../RestOrderCard/RestOrderCard';
import RestOrder from '../RestOrder/RestOrder';

import './RestOrders.scss';

import restaurants from '../../mocks/restaurants';

function RestOrders() {
  const restaurant = restaurants[0];

  const [ordersSort, setOrdersSort] = useState('pending');
  const [activeOrder, setActiveOrder] = useState(null);

  const orders = useSelector((state) =>
    state.orders.list.filter((order) => order.restaurantId === restaurant.id)
  );

  const filteredOrders = orders.filter((order) => order.status === ordersSort);

  return (
    <div className="rest-orders">
      <RestOrdersNav
        ordersSort={ordersSort}
        setOrdersSort={setOrdersSort}
        activeOrder={activeOrder}
        setActiveOrder={setActiveOrder}
      />

      <div className="rest-orders__content">
        {activeOrder && (
          <RestOrder order={activeOrder} ordersSort={ordersSort} />
        )}

        {!activeOrder && (
          <div className="rest-orders__list orders-list">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <RestOrderCard
                  key={order.id}
                  order={order}
                  setActive={setActiveOrder}
                />
              ))
            ) : (
              <p className="orders-list__empty">No {ordersSort} orders</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default RestOrders;
