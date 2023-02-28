import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import CouriersOrders from '../CouriersOrders/CouriersOrders';
import CouriersOrder from '../CouriersOrder/CouriersOrder';
import CouriersStats from '../CouriersStats/CouriersStats';
import CouriersForm from '../CouriersForm/CouriersForm';

import './CouriersDashboard.scss';

function CouriersDashboard() {
  function getPendingOrders(orders) {
    return orders
      .filter((order) => order.status === 'pending')
      .map((order) => {
        const distanceToRestaurant = Math.floor(Math.random() * 25 + 1);
        const distanceToCustomer = Math.floor(Math.random() * 25 + 1);
        return { ...order, distanceToRestaurant, distanceToCustomer };
      })
      .sort(
        (a, b) =>
          a.distanceToRestaurant +
          a.distanceToCustomer -
          b.distanceToRestaurant -
          b.distanceToCustomer
      );
  }

  const orders = useSelector((state) => state.orders.list);
  const pendingOrders = getPendingOrders(orders);

  const [activeOrder, setActiveOrder] = useState(null);

  return (
    <div className="couriers-dashboard">
      <Tabs
        size={{ base: 'md', md: 'lg' }}
        isFitted
        variant="enclosed"
        colorScheme="green"
      >
        <TabList className="couriers-dashboard__tablist">
          <Tab>Orders</Tab>
          <Tab>Personal Stats</Tab>
          <Tab>Personal Info</Tab>
        </TabList>

        <TabPanels className="couriers-dashboard__tabpanels">
          <TabPanel p={0}>
            {activeOrder && (
              <CouriersOrder order={activeOrder} setActive={setActiveOrder} />
            )}

            {!activeOrder &&
              (pendingOrders.length > 0 ? (
                <CouriersOrders
                  orders={pendingOrders}
                  setActive={setActiveOrder}
                />
              ) : (
                <p className="couriers-dashboard__empty">No pending orders</p>
              ))}
          </TabPanel>

          <TabPanel p={0}>
            <CouriersStats />
          </TabPanel>

          <TabPanel p={0}>
            <CouriersForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default CouriersDashboard;
