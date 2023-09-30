import React from 'react';
import { Link } from 'react-router-dom';

const Motor = (motor) => {
  const {
    motor: {
      id, description, name, photo,
    },
  } = motor;
  return (
    <Link to={`/motorbike/${id}`}>
      <div className="motor-card">
        <div>
          <img className="card-img" src={photo} alt="Motorbike" />
        </div>
        <p className="card-title">{name.toUpperCase()}</p>
        <hr className="dotted-line" />
        <p className="card-desc">{description}</p>
      </div>
    </Link>
  );
};

export default Motor;
