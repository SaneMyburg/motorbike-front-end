import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Reserve = () => {
  const { motorId } = useParams(); // Get the motorbike ID from the URL
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [username, setUsername] = useState(''); // Autofilled username

  console.log('motorId:', motorId);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the reservation logic here
    console.log('Reservation submitted:', { motorId, date, city, username });
  };

  return (
    <div className="reserve">
      <h2>Reserve an Appointment</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            readOnly // Autofilled username should be read-only
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Reserve
        </Button>
      </Form>
    </div>
  );
};

export default Reserve;
