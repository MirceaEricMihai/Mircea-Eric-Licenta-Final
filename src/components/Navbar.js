import React from "react";
import { Link } from "react-router-dom";
const createHistory = require("history").createBrowserHistory;

function Navbar() {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  let type = localStorage.getItem("type");

  const logout = () => {
    localStorage.clear();
    let history = createHistory();

    history.push("/");
    let pathUrl = window.location.href;
    window.location.href = pathUrl;
  };

  return (
    <nav
      style={{ fontFamily: "Roboto" }}
      className="navbar navbar-primary bg-light navbar-expand-lg fixed-top shadow py-3"
    >
      <Link to="/" className="navbar-brand ml-2">
        Royal Therapy
      </Link>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <i className="fa fa-bars text-primary"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          {!isLoggedIn && (
            <li className="navbar-item">
              <Link to="/" className="nav-link mr-2 ml-2">
                Homepage
              </Link>
            </li>
          )}

          {!isLoggedIn && (
            <li className="navbar-item">
              <Link to="/blog" className="nav-link mr-2 ml-2">
                Blog
              </Link>
            </li>
          )}

          {!isLoggedIn && (
            <li className="navbar-item">
              <Link to="/about" className="nav-link mr-2 ml-2">
                About
              </Link>
            </li>
          )}

          {!isLoggedIn && (
            <li className="navbar-item">
              <Link to="/contact" className="nav-link mr-2 ml-2">
                Contact
              </Link>
            </li>
          )}

          {!isLoggedIn && (
            <li className="navbar-item">
              <Link to="/appointments" className="nav-link mr-2 ml-2">
                Prices
              </Link>
            </li>
          )}

          {!isLoggedIn && (
            <li className="navbar-item">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  My account
                </button>
                <div className="dropdown-menu">
                  <Link to="/login/patient" className="nav-link mr-2 ml-2 text-secondary">
                    Login
                  </Link>
                  <Link to="/register/patient" className="nav-link mr-2 ml-2 text-secondary">
                    Register
                  </Link>
                </div>
              </div>
            </li>
          )}

          {type == "Doctor" && (
            <li className="navbar-item">
              <Link to="/patient/sheets" className="nav-link">
                <span className="m-3">Patient Observation Sheets</span>
              </Link>
            </li>
          )}

          {type == "Doctor" && (
            <li className="navbar-item">
              <Link to="/doctor/dashboard" className="nav-link">
                <span className="m-3">Doctor Dashboard</span>
              </Link>
            </li>
          )}

          {type == "Patient" && (
            <li className="navbar-item">
              <Link to="/patient/dashboard" className="nav-link">
                <span className="m-3">Patient Dashboard</span>
              </Link>
            </li>
          )}

          {type == "Patient" && (
            <li className="navbar-item">
              <Link to="/patient/medicals" className="nav-link">
                <span className="m-3">Medical Letters</span>
              </Link>
            </li>
          )}

          {type == "Patient" && (
            <li className="navbar-item">
              <Link
                to="/patient/appointment"
                className="nav-link btn btn-primary rounded-pill mr-5"
              >
                <span className="m-3">Make an Appointment</span>
              </Link>
            </li>
          )}

          {isLoggedIn && (
            <li className="navbar-item">
              <a href="#" onClick={logout} className="nav-link btn btn-danger rounded-pill mr-4">
                <span className="m-3">Logout</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
