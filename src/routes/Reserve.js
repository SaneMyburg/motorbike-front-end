import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchMotorbikes } from '../redux/motorbikes/motorbikes';
import { getUser } from '../redux/users/userSlice';

const Reserve = ({ addReservation }) => {
  const { id } = useParams();
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [motorbikeSelection, setMotorbikeSelection] = useState('');
  const [username, setUsername] = useState('');
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const cities = ['Durban', 'Cape Town', 'Windhoek', 'Tokyo', 'Paris', 'San Francisco', 'Dublin', 'Seoul', 'Montreal'];

  const motors = useSelector((state) => state.motorbikes.motors);
  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorbikes());
    // Fetch user data when the component mounts and track loading state
    dispatch(getUser())
      .then(() => {
        setIsLoadingUser(false);
      })
      .catch(() => setIsLoadingUser(false));
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      const selectedMotorbike = motors.find((motor) => motor.id === parseInt(id, 10));
      if (selectedMotorbike) {
        setMotorbikeSelection(selectedMotorbike.name);
      }
    }
    const selectedMotorbike = motors.find((motor) => motor.name === motorbikeSelection);

    if (selectedMotorbike && user) {
      const motorName = selectedMotorbike.name;
      const reservationData = {
        motorName,
        date,
        city,
        user: {
          name: username,
          id: user.id,
        },
        userId: user.id, // Use the user's ID
        motorbikeId: selectedMotorbike.id, // Use the motorbike's ID
      };
      axios
        .post(`http://127.0.0.1:4000/api/v1/users/${user.id}/motorbikes/${selectedMotorbike.id}/reservations`, reservationData)
        .then((response) => {
          if (addReservation) {
            addReservation(response.data); // Assuming the response contains the saved reservation
          }
        });
      navigate('/myreservations');
    }
  };

  return (
    <div className="reserve">
      {isLoadingUser ? (
        // Display loading indicator while fetching user data
        <div className="text-center">
          <Spinner animation="border" />
          <p>Loading user data...</p>
        </div>
      ) : (
        <div>
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
              <Form.Select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              >
                <option value="">Select a city</option>
                {cities.map((cityOption) => (
                  <option key={cityOption} value={cityOption}>
                    {cityOption}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            {!id && (
              <Form.Group controlId="motorbike">
                <Form.Label>Motorbike</Form.Label>
                <Form.Select
                  value={motorbikeSelection}
                  onChange={(e) => setMotorbikeSelection(e.target.value)}
                  required
                >
                  <option value="">Select a motorbike</option>
                  {motors.map((option) => (
                    <option key={option.id} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            )}

            <Form.Group controlId="username">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Reserve
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

Reserve.propTypes = {
  addReservation: PropTypes.func.isRequired,
};

export default Reserve;
