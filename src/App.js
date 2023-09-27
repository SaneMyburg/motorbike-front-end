import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Layout from './components/Layout';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
