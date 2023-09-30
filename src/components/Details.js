import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { fetchMotorbikes } from '../redux/motorbikes/motorbikes';
import '../style/details.css';

function Details() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorbikes());
  }, [dispatch]);
  const motors = useSelector((state) => state.motorbikes.motors);
  const { id } = useParams();
  const motorbike = motors.find((motor) => motor.id === parseInt(id, 10));

  if (!motorbike) {
    return (
      <div>
        <h1>
          Motorbike not found for ID:
          {id}
        </h1>
        <Link to="/">Go to Home</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <img src={motorbike.photo} alt="motorbike" style={{ width: '100%', height: '500px' }} />
        </div>
        <div className="col-4">
          <p>
            Name:
            {motorbike.name}
          </p>
          <p>
            price:
            {motorbike.price}
          </p>
          <p>
            Description:
            {motorbike.description}
          </p>
          <p>
            Total Amount Payable:
            {motorbike.total_amount_payable}
          </p>
          <p>
            Duration:
            {motorbike.duration}
          </p>
          <p>
            Finance_Fee:
            {motorbike.finance_fee}
          </p>
          <p>
            Model:
            {motorbike.created_at}
          </p>
          <Link to={`/reserve/${motorbike.id}`} className="btn reserve-btn">Book Reservation</Link>
        </div>
      </div>
      <div className="row">
        <Link to="/" className="back-btn"><FontAwesomeIcon icon={faCaretLeft} /></Link>
      </div>
    </div>
  );
}

export default Details;
