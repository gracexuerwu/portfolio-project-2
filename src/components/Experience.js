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
      <div className="flex-container space-between">
        <div className="flex-item-left"><h2>EXPERIENCE</h2></div>
        <div className="flex-item-center">
          <h3>3D Generalist Internship</h3>
          <ul>
              <li className="experienceLocation">Singapore</li>
              <li className="experienceDetail">- Developing screens and UI components for the web application using React and Tailwind.</li>
          </ul>
        </div>
        <div className="flex-item-right">Jan - Jun 2018</div>
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
