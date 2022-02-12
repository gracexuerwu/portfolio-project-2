import React from "react";
import "../styles/Nav.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">
        <h3>GW</h3>
      </NavLink>
      <ul>
        <NavLink to="/">
          {" "}
          <li>Projects</li>
        </NavLink>
        <NavLink to="/about">
          {" "}
          <li>Contact</li>
        </NavLink>
        <NavLink to="/about">
          {" "}
          <li>About</li>
        </NavLink>
      </ul>
    </nav>
  );
}
