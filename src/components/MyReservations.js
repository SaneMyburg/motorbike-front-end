import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../redux/reservations/reservationSlice';

const MyReservations = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const { reservations } = useSelector((state) => state.reservations);

  useEffect(() => {
    dispatch(fetchReservations({ userId: user.id }));
  }, [dispatch, user.id]);

  return (
    <div>
      <h2>My Reservations</h2>
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation.motorName}>
              <strong>Motor Name:</strong>
              {' '}
              {reservation.motorName}
              {' '}
              <br />
              <strong>Date:</strong>
              {' '}
              {reservation.date}
              {' '}
              <br />
              <strong>City:</strong>
              {' '}
              {reservation.city}
              {' '}
              <br />

            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyReservations;
