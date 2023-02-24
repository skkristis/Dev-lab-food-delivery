import React from 'react';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import RestOrders from '../RestOrders/RestOrders';
import RestDishes from '../RestDishes/RestDishes';
import RestStats from '../RestStats/RestStats';
import RestDescriptionForm from '../RestDescriptionForm/RestDescriptionForm';

import './RestDashboard.scss';

function RestDashboard() {
  return (
    <div className="rest-dashboard">
      <Tabs
        size={{ base: 'md', md: 'lg' }}
        isFitted
        variant="enclosed"
        colorScheme="green"
      >
        <TabList className="rest-dashboard__tablist">
          <Tab>Orders</Tab>
          <Tab>Dishes</Tab>
          <Tab>Restaurant Stats</Tab>
          <Tab>Restaurant Info</Tab>
        </TabList>

        <TabPanels className="rest-dashboard__tabpanels">
          <TabPanel p={0}>
            <RestOrders />
          </TabPanel>

          <TabPanel p={0}>
            <RestDishes />
          </TabPanel>

          <TabPanel p={0}>
            <RestStats />
          </TabPanel>

          <TabPanel p={0}>
            <RestDescriptionForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default RestDashboard;
