import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Layout from './components/Layout';
import Signup from './components/Signup';
import Login from './components/Login';
import NotFound from './routes/NotFound';
import Details from './components/Details';

function App() {
  const { user } = useSelector((state) => state.users);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {user ? (
          <>
            <Route index element={<Home />} />
            <Route path="/motorbike/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <>
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<Login />} />
          </>
        )}
      </Route>
    </Routes>
  );
}

export default App;
