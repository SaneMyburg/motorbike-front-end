import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to fetch reservations from your API
    axios.get('http://127.0.0.1:4000/api/v1/reservations')
      .then((response) => {
        // Set the reservations data in state
        setReservations(response.data);
      })
      .catch((error) => {
        console.error('Error fetching reservations:', error);
      });
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  return (
    <div>
      <h2>My Reservations</h2>
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <ul>
          {reservations.map((reservation, index) => (
            <li key={index}>
              <strong>Motor Name:</strong> {reservation.motorName}<br />
              <strong>Date:</strong> {reservation.date}<br />
              <strong>City:</strong> {reservation.city}<br />
              <strong>Username:</strong> {reservation.username}<br />
              <strong>User ID:</strong> {reservation.userId}<br />
              <strong>Motorbike ID:</strong> {reservation.motorbikeId}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyReservations;
