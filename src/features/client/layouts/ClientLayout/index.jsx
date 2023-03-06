import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../../../../store/reducers/userReducer';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import CookieModal from '../../components/CookieModal/CookieModal';

import './index.scss';
import { Box, Button, ChakraProvider, useMediaQuery } from '@chakra-ui/react';

function Layout() {
  const [smallerScreen] = useMediaQuery('(max-width: 800px)');

  const sessionUser = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (sessionUser === null && accessToken !== null) {
      dispatch(add());
    }
  }, []);

  const handleLogin = () => {
    dispatch(add({ email: 'test@test.com', password: 'secret123' }));
  };

  const handleLogout = () => {
    dispatch(remove());
  };

  return (
    <ChakraProvider>
      <div className="Layout">
        <Header />
        <Box
          as="main"
          className="Layout__main"
          padding={smallerScreen ? '120px 0 68px' : '80px 0 68px'}
        >
          <Button onClick={handleLogin}>login</Button>
          <Button onClick={handleLogout}>logout</Button>
          <Outlet />
        </Box>
        <Footer />
        <CookieModal />
      </div>
    </ChakraProvider>
  );
}

export default Layout;
