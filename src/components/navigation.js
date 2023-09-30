import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../redux/users/userSlice';
import logo from '../style/logo.png';

const links = [
  { path: '/', text: 'Home' },
  { path: '/myreservations', text: 'My Reservations' },
  { path: '/reserve', text: 'Add Reservation' },
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
  return (
    <div className="nav-container">
      <section className="logo-container">
        <NavLink to="/">
          <img className="logo" src={logo} alt="Logo" />
        </NavLink>
      </section>
      {user ? (
        <>
          <ul className="nav-list">
            {links.map((link) => (
              <li className="nav-link" key={link.text}>
                <NavLink to={link.path}>
                  {link.text}
                </NavLink>
              </li>
            ))}
            <li className="nav-link">
              <button className="signout-btn" type="button" onClick={handleSignOut}>
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
                <NavLink to={link.path}>
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
  );
};

export default NavigationPanel;
