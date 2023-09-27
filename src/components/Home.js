import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { fetchMotorbikes } from '../redux/motorbikes/motorbikes';
import Motor from './Motor';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorbikes());
  }, [dispatch]);
  const motors = useSelector((state) => state.motorbikes);

  return (
    <div className="text-center w-75">
      <h2 className="text-center m-4">LATEST MODELS</h2>
      <p className="text-center header-text2 m-2">Please select a model</p>
      <div className="show-motor">
        {motors.length > 0 ? (
          <div className="row">
            {motors.map((motor) => (
              <div className="col-md-4" key={motor.id}>
                <Motor motor={motor} />
              </div>
            ))}
          </div>
        ) : (
          <div className="d-flex flex-column justify-content-center border mx-auto info">
            <h2 className="w-100 text-center">
              No motorcycle
              {' '}
              <FontAwesomeIcon icon={faMotorcycle} />
              {' '}
              available
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;