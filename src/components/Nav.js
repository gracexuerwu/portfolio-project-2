import React from "react";
import "../styles/Nav.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { House } from "phosphor-react";

export default function Nav(props) {
  const navBarAttribute = props.theme === "light" ? "navbar navbar-customclass fixed-top navbar-expand-lg navbar-light" : "navbar navbar-customclass fixed-top navbar-expand-lg navbar-dark";
  return (
    <nav
      className={navBarAttribute}
      style={{ color: "#0000" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand navbar-font" href="/" title="Homepage">
          <House size={32} className="home-icon" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink
              exact
              activeClassName="active"
              to="/"
              className="nav-link navbar-font mx-2"
              aria-current="page"
              title="Projects"
            >
              Projects
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/about"
              className="nav-link navbar-font mx-2"
              title="About"
            >
              About
            </NavLink>
            {/* <NavLink
              to="/about"
              className="nav-link navbar-font mx-2"
              title="About"
            >
              Contact
            </NavLink> */}
            <NavLink
              activeClassName="active"
              to="#"
              className="nav-link navbar-font mx-2"
              title="Fake"
            >
              <FontAwesomeIcon
                onClick={props.onClick}
                icon={props.theme === "light" ? faSun : faMoon}
                className="fa-lgn theme-toggle sun-icon"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
