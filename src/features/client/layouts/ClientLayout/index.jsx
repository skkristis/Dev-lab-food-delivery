import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

import './index.css';

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
