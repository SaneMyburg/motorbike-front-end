import { Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from './navigation';
import Home from './Home';

const Layout = () => (
  <div style={{ display: 'flex' }}>
    <Navbar />
    <Outlet />
  </div>
);
export default Layout;
