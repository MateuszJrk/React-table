import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="wrapper d-flex">
        <div className="sideMenu">
          <div className="sidebar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/movies" className="nav-link">
                  <i className="fas fa-film" />
                  <span className="text"> Movies</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/settings" className="nav-link">
                  <i className="fas fa-cog" />
                  <span className="text"> Theme Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i className="fas fa-home" />
                  <span className="text"> Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/catalogs" className="nav-link">
                  <i className="fas fa-folder" />
                  <span className="text"> Catalogs</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/filters" className="nav-link">
                  <i className="fas fa-edit" />
                  <span className="text"> Filters</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/date" className="nav-link">
                  <i className="fas fa-calendar-alt" />
                  <span className="text"> Date Picker</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
