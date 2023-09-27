import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [{ path: '/', text: 'Motorbick' },
  { path: 'newpath', text: 'Reserve' },
  { path: 'newpath2', text: 'My reservations' },
  { path: 'newpath3', text: 'ADD Motorbick' },
  { path: 'newpath3', text: 'Delete Motorbick' },
];

const NavigationPanel = () => (
  <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 border-end">
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <button type="button" className="d-flex align-items-center pt-5 pb-5 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-5 d-none d-sm-inline text-black">Logo</span>
      </button>
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
          <li><a className="" href="user">Sign out</a></li>
        </ul>
      </div>
    </div>
  </div>
);

export default NavigationPanel;
