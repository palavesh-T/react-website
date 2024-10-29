import React, { useState } from 'react';
import "../Admin/assete/css/adminheader.css";
import { Link } from 'react-router-dom';
import admin_logo from "../assete/logo/LOGO.png";

const Adminheader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="headernew">
      <div className="logos">
        <img src={admin_logo} alt=""/>
      </div>
      <nav className={`navs ${isOpen ? 'open' : ''}`}>
        <ul className="menus">
          <li className="menus-item"><Link to="/Viewdetails">Viewdetails</Link></li>
          <li className="menus-item"><Link to="/Changepassword">Change Password</Link></li>
          <li className="menus-item"><Link to="/Admin">Logout</Link></li>
        </ul>
      </nav>
      <div className="menus-icon" onClick={toggleMenu}>
        &#9776; {/* This is the hamburger icon */}
      </div>
    </div>
  );
};

export default Adminheader;
