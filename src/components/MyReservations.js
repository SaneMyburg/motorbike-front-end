import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../redux/reservations/reservationSlice';
import { fetchMotorbikes } from '../redux/motorbikes/motorbikes';

const MyReservations = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const { reservations } = useSelector((state) => state.reservations);
  const { motors } = useSelector((state) => state.motorbikes);

  useEffect(() => {
    dispatch(fetchReservations({ userId: user.id }));
    dispatch(fetchMotorbikes());
  }, [dispatch, user.id]);

  return (
    <div>
      <h2>My Reservations</h2>
      addReservation
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation.motorName}>
              <strong>Motor Name:</strong>
              {' '}
              {motors.find((item) => item.id === reservation.motorbike_id)?.name || 'No Match Found'}
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
