import React from 'react';
import Navbar from './navigation';
import Home from './Home';

const Layout = () => (
  <div className="container-fluid">
    <div className="row flex-nowrap">
      <Navbar />
      <Home />
      <div className="col py-3" />
    </div>
  </div>
);
export default Layout;
