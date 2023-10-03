import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { deleteMotorbike } from '../redux/motorbikes/deleteMotorbikeSlice';
import { fetchMotorbikes } from '../redux/motorbikes/motorbikes';

const DeleteMotorbike = () => {
  const dispatch = useDispatch();
  const { motors } = useSelector((state) => state.motorbikes);
  const { user } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.motorbikes.loading);
  const error = useSelector((state) => state.motorbikes.error);

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteMotorbike({ userId: user.id, motorbikeId: id }));
      alert('Motorbike deleted successfully.'); // Show a notification
      navigate('/'); // Use navigate to redirect to the home page
    } catch (error) {
      console.error('Error deleting motorbike:', error);
    }
  };

  useEffect(() => {
    dispatch(fetchMotorbikes());
  }, [dispatch]);

  if (loading === 'pending') {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }

  return (
    <div>
      <h1>Motorbikes</h1>
      <ul>
        {motors.map((motorbike) => (
          <li key={motorbike.id}>
            {motorbike.name}
            {' '}
            <button type="button" onClick={() => handleDelete(motorbike.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteMotorbike;
