import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { Outlet } from 'react-router-dom';

import './index.css';
import SidebarWithHeader from '../../components/SidebarWithHeader';

function Layout() {
  return (
    <ChakraProvider>
      <SidebarWithHeader>
        <Outlet />
      </SidebarWithHeader>
    </ChakraProvider>
  );
}

export default Layout;
