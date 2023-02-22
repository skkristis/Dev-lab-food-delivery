import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  ChakraProvider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import CouriersOrders from "../CouriersOrders/CouriersOrders";
import CouriersOrder from "../CouriersOrder/CouriersOrder";
import CouriersForm from "../CouriersForm/CouriersForm";

import "./CouriersDashboard.scss";

function CouriersDashboard() {
  function getPendingOrders(orders) {
    let pendingOrders = orders.filter((order) => order.status === "pending");

    pendingOrders = pendingOrders.map((order) => {
      const distance = Math.floor(Math.random() * 25 + 0.5);
      return { ...order, distance };
    });

    pendingOrders = pendingOrders.sort((a, b) => a.distance - b.distance);
    return pendingOrders;
  }

  const orders = useSelector((state) => state.orders.list);
  const pendingOrders = getPendingOrders(orders);

  const [activeOrder, setActiveOrder] = useState(null);

  return (
    <ChakraProvider>
      <div className="couriers-dashboard">
        <Tabs size="lg" isFitted variant="enclosed" colorScheme="green">
          <TabList>
            <Tab>Orders</Tab>
            <Tab>Personal Info</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
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

            <TabPanel>
              <CouriersForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </ChakraProvider>
  );
}

export default CouriersDashboard;
