import React, { useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMotorbikes } from '../redux/motorbikes/motorbikes';

function Details() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorbikes());
  }, [dispatch]);
  const motors = useSelector((state) => state.motorbikes.motors);
  console.log("Alishah");
  console.log(motors);
  const { id } = useParams();
  const motorbike = motors.find((motor) => motor.id === parseInt(id));
  console.log("onemotorbike", motorbike);
  // Check if a motorbike with the specified 'id' was found
  if (!motorbike) {
    return (
      <div>
        <h1>Motorbike not found for ID: {id}</h1>
      <Link to="/">Go to Home</Link>
      </div>
    );
  }
  // Now you can use the 'id' variable to fetch data or perform other actions based on the 'id' parameter.

  return (
    <div className="container">
      <div class="row">
        <div class="col-8">
           <img src={motorbike.photo} alt="image" className='' style={{ width: '100%', height: '500px' }} />
        </div>
        <div class="col-4">
          <p>Name: {motorbike.name}</p>
          <p>price: {motorbike.price}</p>
          <p>Description: {motorbike.description}</p>
          <p>Total Amount Payable: {motorbike.total_amount_payable}</p>
          <p>Duration: {motorbike.duration}</p>
          <p>Finance_Fee: {motorbike.finance_fee}</p>
          <p>Model: {motorbike.created_at}</p>
        </div>
      </div>
      <div class="row">
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
}

export default Details;
