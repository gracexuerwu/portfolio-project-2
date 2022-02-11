import React from "react";
import "../styles/Experience.css";

export default function Experience() {
  return (
    <div className="Experience">
      {" "}
      <hr
        style={{
          height: 1,
          borderColor: "#1A1A1A",
        }}
      />
      {/* <div className="experience-container">
        <div>EXPERIENCE</div>
        <div className="item">3D Generalist Internship</div>
        <div>Jan - Jun 2018</div>
      </div> */}
      <div className="d-flex justify-content-between">
        <div className="left-col">EXPERIENCE</div>
        <div className="center-col">
          <h2>3D Generalist Internship</h2>
          <ul>
              <li className="experienceLocation">Singapore</li>
              <li className="experienceDetail">- Developing screens and UI components for the web application using React and Tailwind.</li>
          </ul>
        </div>
        <div className="right-col">Jan - Jun 2018</div>
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
