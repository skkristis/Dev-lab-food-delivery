import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

import './index.css';
import { ChakraProvider } from '@chakra-ui/react';

function Layout() {
  return (
    <ChakraProvider>
      <div className="Layout">
        <Header />
        <main className="Layout__main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default Layout;
