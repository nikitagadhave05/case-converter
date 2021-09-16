import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/TextForm">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                {props.about}
              </Link>
            </li>
          </ul>
        <div className="form-check form-switch mx-2 ">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className={`form-check-label" htmlfor="flexSwitchCheckDefault ${props.mode === 'light' ? 'text-dark' : 'text-light'}`}>
            Enable Dark Mode
          </label>
        </div>
      </div>
        </div>
        {/* <button type="button" className="btn btn-info mx-1" onClick={props.blueMode}></button>
        <button type="button" className="btn btn-warning mx-1" onClick={props.yellowMode}></button>
        <button type="button" className="btn btn-secondary mx-1" onClick={props.grayMode}></button>
        <button type="button" className="btn btn-success mx-1" onClick={props.greenMode}></button> */}

    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Your title here",
  about: "Your about here",
};
