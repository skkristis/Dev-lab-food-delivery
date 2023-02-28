import React from 'react';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import RestaurantOrders from '../RestaurantOrders/RestaurantOrders';
import RestaurantDishes from '../RestaurantDishes/RestaurantDishes';
import RestaurantStats from '../RestaurantStats/RestaurantStats';
import RestaurantDescriptionForm from '../RestaurantDescriptionForm/RestaurantDescriptionForm';

import './RestaurantDashboard.scss';

function RestaurantDashboard() {
  return (
    <div className="restaurant-dashboard">
      <Tabs
        size={{ base: 'md', md: 'lg' }}
        isFitted
        variant="enclosed"
        colorScheme="green"
      >
        <TabList className="restaurant-dashboard__tablist">
          <Tab>Orders</Tab>
          <Tab>Dishes</Tab>
          <Tab>Restaurant Stats</Tab>
          <Tab>Restaurant Info</Tab>
        </TabList>

        <TabPanels className="restaurant-dashboard__tabpanels">
          <TabPanel p={0}>
            <RestaurantOrders />
          </TabPanel>

          <TabPanel p={0}>
            <RestaurantDishes />
          </TabPanel>

          <TabPanel p={0}>
            <RestaurantStats />
          </TabPanel>

          <TabPanel p={0}>
            <RestaurantDescriptionForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default RestaurantDashboard;
