import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="container">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/movies" className="nav-link">
            <i className="fas fa-film" />
            <span> Movies</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="fas fa-cog" />
            <span> Theme Settings</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            <i className="fas fa-home" />
            <span> Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/catalogs" className="nav-link">
            <i className="fas fa-folder" />
            <span> Catalogs</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/filters" className="nav-link">
            <i className="fas fa-edit" />
            <span> Filters</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/date" className="nav-link">
            <i className="fas fa-calendar-alt" />
            <span> Date Picker</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            <i className="fas fa-sign-in-alt" />
            <span> Login</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
