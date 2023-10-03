import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { fetchMotorbikes } from '../redux/motorbikes/motorbikes';
import Motor from './Motor';
import {
  LeftArrowIcon,
  RightArrowIcon,
} from '../icons';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorbikes());
  }, [dispatch]);
  const motors = useSelector((state) => state.motorbikes.motors);

  const motorsContainerRef = useRef(null);

  const scrollLeft = () => {
    if (motorsContainerRef.current) {
      motorsContainerRef.current.scrollLeft -= 50;
    }
  };

  const scrollRight = () => {
    if (motorsContainerRef.current) {
      motorsContainerRef.current.scrollLeft += 50;
    }
  };

  return (
    <div className="home-container">
      <h1>LATEST MODELS</h1>
      <span className="info-txt">Please select a model</span>
      <hr className="dotted-line" />
      <div className="motors-container">
        <button type="button" className="scroll-button left-scroll-button" onClick={scrollLeft}>
          <LeftArrowIcon />
        </button>
        {motors.length > 0 ? (
          <div className="motors-list" ref={motorsContainerRef}>
            {motors.map((motor) => (
              <div key={motor.id}>
                <Motor motor={motor} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h2>
              No motorcycle
              {' '}
              <FontAwesomeIcon icon={faMotorcycle} />
              {' '}
              available
            </h2>
          </div>
        )}
        <button type="button" className="scroll-button right-scroll-button" onClick={scrollRight}>
          <RightArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default Home;
