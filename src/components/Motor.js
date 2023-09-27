import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Motor = (motor) => {
  const {
    motor: {
      id, description, name, photo,
    },
  } = motor;
  return (
    <div className="motor-card">
      <Card style={{ width: '18rem', border: 'none' }}>
        <Link to={`/motorbike/${id}`}>
          <div className="motor-image-wrap">
            <Card.Img variant="top" style={{ width: '350px', height: '200px' }} src={photo} className="motor-image" />
          </div>
          <Card.Body>
            <Card.Title><p className="text-dark text-center">{name.toUpperCase()}</p></Card.Title>
            <Card.Text><p className="text-dark text-center">{description}</p></Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
};

export default Motor;
