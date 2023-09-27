import { Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from './navigation';

const Layout = () => (
  <div style={{ display: 'flex' }}>
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
