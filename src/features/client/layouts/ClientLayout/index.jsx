import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import CookieModal from '../../components/CookieModal/CookieModal';

import './index.scss';
import { Box, ChakraProvider, useMediaQuery } from '@chakra-ui/react';

function Layout() {
  const [smallerScreen] = useMediaQuery('(max-width: 800px)');

  return (
    <ChakraProvider>
      <div className="Layout">
        <Header />
        <Box
          as="main"
          className="Layout__main"
          padding={smallerScreen ? '140px 0 68px' : '100px 0 68px'}
        >
          <Outlet />
        </Box>
        <Footer />
        <CookieModal />
      </div>
    </ChakraProvider>
  );
}

export default Layout;
