import React from "react";
import "../styles/Education.css";

export default function Education() {
  return (
    <div className="Education">
      <div className="d-flex justify-content-between">
        <div className="left-col">EDUCATION</div>
        <div className="center-col">
          <h2>Lucerne University of Applied Arts and Sciences</h2>
          <ul>
            <li className="educationLocation">Switzerland</li>
            <li className="educationDetail">
              - Developing screens and UI components for the web application
              using React and Tailwind.
            </li>
          </ul>
        </div>
        <div className="right-col">
          <div>2019 / 2022</div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="left-col"></div>
        <div className="center-col">
          <h2>Singapore Polytechnic</h2>
          <ul>
            <li className="educationLocation">Singapore</li>
            <li className="educationDetail">
              - Developing screens and UI components for the web application
              using React and Tailwind.
            </li>
          </ul>
        </div>
        <div className="right-col">
          <div>2016 / 2019</div>
        </div>
      </div>
      <hr
        style={{
          height: 1,
          borderColor: "#1A1A1A",
        }}
      />
    </div>
  );
}
