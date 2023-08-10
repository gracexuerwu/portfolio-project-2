import React from "react";
import "../styles/Experience.css";
// import { FolderOpen } from "phosphor-react";

export default function Experience() {
  return (
    <div className="Experience">
      {/* {" "}
      <hr
        style={{
          height: 1,
          borderColor: "#1A1A1A",
        }}
      />
      <div className="flex-container space-between">
        <div className="flex-item-left"><h2>🗂 &nbsp;EXPERIENCE</h2></div>
        <div className="flex-item-center">
          <h3>Masonary Studios / 3D Generalist Internship</h3>
          <ul>
              <li className="experienceLocation">Singapore</li>
              <li className="experienceDetail">- Worked on creating 3D assets, motion graphics, and storyboards that convey the creative concepts and ideas of clients such as Singapore Health Board and Continental for advertising purposes.</li>
          </ul>
        </div>
        <div className="flex-item-right">Apr - Aug 2018</div>
      </div>
      <hr
        style={{
          height: 1,
          borderColor: "#1A1A1A",
        }}
      /> */}
      <div className="row justify-content-between">
        <div className="col-4 bold" id="connect-bar">
          Experience
        </div>
        <div className="col-6 d-flex flex-row-reverse justify-content-between">
          <div className="p-2 bold">Dec 2022 / July 2023</div>
          <div className="p-2 bold">BMW Group</div>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-4" id="connect-bar">
          
        </div>
        <div className="col-6 d-flex flex-row-reverse justify-content-between">
          <div className="p-2 padding">Munich, Germany</div>
          <div className="p-2 padding">Internship Interaction Design, User interfaces + Driving simulator</div>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-4" id="connect-bar">
         
        </div>
        <div className="col-6 d-flex flex-row-reverse justify-content-between">
          <div className="p-2 bold">Apr 2018 / August 2018</div>
          <div className="p-2 bold">Masonry studios</div>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-4" id="connect-bar">
          
        </div>
        <div className="col-6 d-flex flex-row-reverse justify-content-between">
          <div className="p-2">Singapore</div>
          <div className="p-2 ExperienceSection">Internship 3D Generalist / Designer</div>
        </div>
      </div>
    </div>
  );
}
