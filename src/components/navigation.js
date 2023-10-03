import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../redux/users/userSlice';
import logo from '../style/logo.png';
import '../style/navigation.css';

const links = [
  { path: '/', text: 'Home' },
  { path: '/myreservations', text: 'My Reservations' },
  { path: '/reserve', text: 'Add Reservation' },
  { path: '/add-motorbikes', text: 'Add Motorbikes' },
];

const authorizationLinks = [{ path: 'login', text: 'Log In' },
  { path: 'signup', text: 'Sign Up' },
];

const NavigationPanel = () => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(logout());
  };

  const [hiddenMenu, setHiddenMenu] = useState(true);

  return (
    <div className="nav-container">
      <button type="button" className="btn-button" onClick={() => setHiddenMenu(!hiddenMenu)}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div className={`${hiddenMenu ? 'hidden' : ''} logo-container`}>

        <section className="logo-container">
          <NavLink to="/" onClick={() => setHiddenMenu(!hiddenMenu)}>
            <img className="logo" src={logo} alt="Logo" />
          </NavLink>
        </section>
        {user ? (
          <>
            <ul className="nav-list">
              {links.map((link) => (
                <li className="nav-link" key={link.text}>
                  <NavLink to={link.path} onClick={() => setHiddenMenu(!hiddenMenu)}>
                    {link.text}
                  </NavLink>
                </li>
              ))}
              <li className="nav-link">
                <button
                  className="signout-btn"
                  type="button"
                  onClick={() => { handleSignOut(); setHiddenMenu(!hiddenMenu); }}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </>
        )
          : (
            <ul className="nav-list">
              {authorizationLinks.map((link) => (
                <li className="nav-link" key={link.text}>
                  <NavLink to={link.path} onClick={() => setHiddenMenu(!hiddenMenu)}>
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        <footer>
          <span>2023 all rights reserved</span>
        </footer>
      </div>
    </div>

  );
};

export default NavigationPanel;
