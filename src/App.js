import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Layout from './components/Layout';
import Signup from './components/Signup';
import Login from './components/Login';
import Details from './components/Details';
import Reserve from './routes/Reserve';
import MyReservations from './components/MyReservations';

function App() {
  const { user } = useSelector((state) => state.users);

  const [reservations, setReservations] = useState([]);

  const addReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {user ? (
          <>
            <Route index element={<Home />} />
            <Route path="/motorbike/:id" element={<Details />} />
            <Route path="reserve/:id" element={<Reserve />} />
            <Route path="/reserve" element={<Reserve addReservation={addReservation} />} />
            <Route
              path="/myreservations"
              element={<MyReservations reservations={reservations} />}
            />
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
