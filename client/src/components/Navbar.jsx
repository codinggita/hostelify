import * as React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';


const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to={"/"} className="navbar-link">HOSTELIFY</Link>
      </div>
      <nav>
        <ul className="navbar-list">
          <li className="navbar-item"><Link to={"/"} className="navbar-link">Home</Link></li>
          <li className="navbar-item"><Link to={"/about"} className="navbar-link">About</Link></li>
          <li className="navbar-item"><Link to={"/login"} className="navbar-link">Login</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
