import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../redux/users/userSlice';

const links = [{ path: '/', text: 'Home' },
  { path: 'newpath2', text: 'My reservations' },
  { path: 'newpath3', text: 'ADD Motorbike' },
  { path: 'newpath3', text: 'Delete Motorbike' },
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

    <>
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 border-end">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <button type="button" className="d-flex align-items-center pt-5 pb-5 mb-md-0 me-md-auto text-white text-decoration-none">
            <span className="fs-5 d-none d-sm-inline text-black">Logo</span>
          </button>
          {user ? (
            <>
              <ul className="nav nav-pills flex-column mb-sm-auto mt-3 pt-3 mb-0 align-items-center align-items-sm-start" id="menu">
                {links.map((link) => (
                  <li className="nav-item" key={link.text}>
                    <NavLink to={link.path}>
                      {link.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <ul>
                  <li>
                    <button type="button" onClick={handleSignOut}>
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          )
            : (
              <ul className="nav nav-pills flex-column mb-sm-auto mt-3 pt-3 mb-0 align-items-center align-items-sm-start" id="menu">
                {authorizationLinks.map((link) => (
                  <li className="nav-item" key={link.text}>
                    <NavLink to={link.path}>
                      {link.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}

        </div>
      </div>
    </>
  );
};

export default NavigationPanel;
