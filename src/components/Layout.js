import { Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from './navigation';

const Layout = () => (
  <div className="layout-container">
    <nav>
      <Navbar />
    </nav>
    <main>
      <Outlet />
    </main>
  </div>
);
export default Layout;
