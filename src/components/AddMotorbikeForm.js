import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addMotorbike } from '../redux/motorbikes/addMotorbikes';

const AddMotorbikeForm = ({ userId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [motorbikeData, setMotorbikeData] = useState({
    name: '',
    photo: '',
    description: '',
    price: 0,
    finance_fee: 0,
    total_amount_payable: 0,
    duration: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMotorbikeData({
      ...motorbikeData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userId) {
      dispatch(addMotorbike(motorbikeData, userId));
      // Clear the form after submission
      setMotorbikeData({
        name: '',
        photo: '',
        description: '',
        price: 0,
        finance_fee: 0,
        total_amount_payable: 0,
        duration: 0,
      });
      navigate('/');
    }
  };

  return (
    <div className="reserve-container">
      <div className="reserve-page">
        <div>
          <h2>Add a New Motorbike</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                <span>
                  Name:
                </span>
                <input
                  type="text"
                  className="w-full p-2 rounded text-black"
                  id="name"
                  name="name"
                  value={motorbikeData.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="photo" className="form-label">
                <span>
                  Photo URL:
                </span>
                <input
                  type="text"
                  className="w-full p-2 rounded text-black"
                  id="photo"
                  name="photo"
                  value={motorbikeData.photo}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                <span>
                  Description:
                </span>
                <textarea
                  className="w-full p-2 rounded text-black"
                  id="description"
                  name="description"
                  value={motorbikeData.description}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                <span>
                  Price:
                </span>
                <input
                  type="number"
                  className="w-full p-2 rounded text-black"
                  id="price"
                  name="price"
                  value={motorbikeData.price}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="finance_fee" className="form-label">
                <span>
                  Finance fee:
                </span>
                <input
                  type="number"
                  className="w-full p-2 rounded text-black"
                  id="finance_fee"
                  name="finance_fee"
                  value={motorbikeData.finance_fee}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="total_amount_payable" className="form-label">
                <span>
                  Total amount payable:
                </span>
                <input
                  type="number"
                  className="w-full p-2 rounded text-black"
                  id="total_amount_payable"
                  name="total_amount_payable"
                  value={motorbikeData.total_amount_payable}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="duration" className="form-label">
                <span>
                  Duration:
                </span>
                <input
                  type="number"
                  className="w-full p-2 rounded text-black"
                  id="duration"
                  name="duration"
                  value={motorbikeData.duration}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <button type="submit" className="reserve-btn">ADD MOTORBIKE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

AddMotorbikeForm.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default AddMotorbikeForm;
