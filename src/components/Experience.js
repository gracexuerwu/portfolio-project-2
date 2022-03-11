import React from "react";
import "../styles/Experience.css";
import { FolderOpen } from "phosphor-react";

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
        <div className="flex-item-left"><h2>EXPERIENCE <FolderOpen size={35} className="icon" /></h2></div>
        <div className="flex-item-center">
          <h3>Masonary Studios / 3D Generalist Internship</h3>
          <ul>
              <li className="experienceLocation">Singapore</li>
              <li className="experienceDetail">- Worked on 3D assets, character design, storyboarding and animation for broadcasting and advertisement.</li>
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
