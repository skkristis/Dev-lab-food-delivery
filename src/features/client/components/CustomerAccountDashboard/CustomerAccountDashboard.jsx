import React from 'react';
import { useSelector } from 'react-redux';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import CustomerAccountWelcome from '../CustomerAccountWelcome/CustomerAccountWelcome';
import CustomerAccountPayment from '../CustomerAccountPayment/CustomerAccountPayment';
import CustomerAccountAddress from '../CustomerAccountAddress/CustomerAccountAddress';
import CustomerAccountSettings from '../CustomerAccountSettings/CustomerAccountSettings';

import './CustomerAccountDashboard.scss';

function CustomerAccountDashboard() {
  const customer = useSelector((state) => state.customer);

  return (
    <div className="customer-dashboard">
      <Tabs size={{ base: 'md', md: 'lg' }} isFitted variant="enclosed">
        <TabList className="customer-dashboard__tablist">
          <Tab>Personal Info</Tab>
          <Tab>Payment Methods</Tab>
          <Tab>Addresses</Tab>
          <Tab>Order History</Tab>
          <Tab>Settings</Tab>
        </TabList>

        <TabPanels className="customer-dashboard__tabpanels">
          <TabPanel p={0}>
            <CustomerAccountWelcome customer={customer} />
          </TabPanel>

          <TabPanel p={0}>
            <CustomerAccountPayment customer={customer} />
          </TabPanel>

          <TabPanel p={0}>
            <CustomerAccountAddress customer={customer} />
          </TabPanel>

          <TabPanel p={0}></TabPanel>

          <TabPanel p={0}>
            <CustomerAccountSettings customer={customer} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default CustomerAccountDashboard;
