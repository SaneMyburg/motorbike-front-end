import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { fetchMotorbikes } from '../redux/motorbikes/motorbikes';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorbikes());
  }, [dispatch]);

  const motors = useSelector((state) => state.motorbikes.motors);

  useEffect(() => {
    console.log('Dispatching fetchMotorbikes action...');
    // Update the local state when motors change
    setMotorbikesData(motors);
    console.log('Length of motorbikesData:', motorbikesData.length)
  }, [motors]);
  
  const [motorbikesData, setMotorbikesData] = useState([]);

  return (
    <div className="text-center w-75">
      <h2 className="text-center m-4">LATEST MODELS</h2>
      <p className="text-center header-text2 m-2">Please select a model</p>
      <div className="show-motor">
        {motorbikesData.length > 0 ? (
          <div className="row">
            {console.log('Length of motorbikesData:', motorbikesData.length)}
            {motorbikesData.map((motorbike) => (
              <div className="col-md-4" key={motorbike.id}>
                <div className="motorbike-card">
                  <h2>{motorbike.name}</h2>
                  <img src={motorbike.photo} alt={motorbike.name} className='motor-image' />
                  <p>{motorbike.description}</p>
                  <p>Price: ${motorbike.price}</p>
                </div>
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
