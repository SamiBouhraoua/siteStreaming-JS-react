import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>streamflix</h2>
      </div>
      <div className="navbar-links">
        <ul>
          <li><Link to="/dashboard">Home</Link></li>
          <li><Link to="/AddVideo">Ajouter une video</Link></li>
          <li><Link to="/account">Compte</Link></li>
        </ul>
      </div>
      <div className="navbar-logout">
        <button onClick={handleLogout} className="btn-logout">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;