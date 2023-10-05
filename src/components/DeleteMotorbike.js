import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteMotorbike } from '../redux/motorbikes/deleteMotorbikeSlice';
import { fetchMotorbikes } from '../redux/motorbikes/motorbikes';

const DeleteMotorbike = () => {
  const dispatch = useDispatch();
  const { motors } = useSelector((state) => state.motorbikes);
  const { user } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.motorbikes.loading);
  const error = useSelector((state) => state.motorbikes.error);

  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteMotorbike({ userId: user.id, motorbikeId: id }));
      setNotification('Motorbike deleted successfully.');
      navigate('/');
    } catch (error) {
      console.error('Error deleting motorbike:', error);
    }
  };

  useEffect(() => {
    dispatch(fetchMotorbikes());
  }, [dispatch]);

  let content;

  if (notification) {
    content = <p>Motorbike deleted successfully</p>;
  } else if (loading === 'pending') {
    content = <p>Loading...</p>;
  } else if (error) {
    content = (
      <p>
        Error:
        {error}
      </p>
    );
  } else if (motors.length === 0) {
    content = <p>No motorbikes found.</p>;
  } else {
    content = (
      <ul className="reservations-list">
        {motors.map((motorbike) => (
          <li key={motorbike.id}>
            <span>
              {motorbike.name}
            </span>
            <button className="del-btn" type="button" onClick={() => handleDelete(motorbike.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="reservations-container">
      <h1>Motorbikes</h1>
      {content}
    </div>
  );
};

export default DeleteMotorbike;
