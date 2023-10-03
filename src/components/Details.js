import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMotorbikes } from '../redux/motorbikes/motorbikes';
import '../style/details.css';
import { LeftArrowIcon } from '../icons';

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
          No Motorbike was found for ID:
          {id}
        </h1>
        <Link to="/">Go to Home</Link>
      </div>
    );
  }

  return (
    <div className="details-page">
      <div className="details-container">
        <div className="details-img-container">
          <img src={motorbike.photo} alt="motorbike" />
        </div>
        <div className="details-list-container">
          <p className="details-title">
            {motorbike.name}
          </p>
          <ul className="details-list">
            <li>
              <span>Price</span>
              <span>
                $
                {motorbike.price}
              </span>
            </li>
            <li>
              <span>Finance Fee</span>
              <span>
                $
                {motorbike.finance_fee}
              </span>
            </li>
            <li>
              <span>Model</span>
              <span>{motorbike.created_at}</span>
            </li>
            <li>
              <span>Duration</span>
              <span>
                {motorbike.duration}
                months
              </span>
            </li>
            <li>
              <span>Total Payable Amount</span>
              <span>
                $
                {motorbike.total_amount_payable}
              </span>
            </li>
            <li>
              <span className="details-desc">
                Description:
                {' '}
                {motorbike.description}
              </span>
            </li>
          </ul>

          <Link to={`/reserve/${motorbike.id}`}>
            <button type="button">
              Book Reservation
            </button>
          </Link>
        </div>
      </div>
      <div className="back-btn-container">
        <Link to="/">
          <button type="button" className="scroll-button left-scroll-button">
            <LeftArrowIcon />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Details;
