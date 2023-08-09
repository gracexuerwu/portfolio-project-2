import React from "react";
import "../styles/Education.css";
// import { GraduationCap } from "phosphor-react";

export default function Education() {
  return (
    <div className="Education">
      <div className="row justify-content-between">
        <div className="col-4" id="connect-bar">
          Education
        </div>
        <div className="col-6 d-flex flex-row-reverse justify-content-between">
          <div className="p-2 date">2021 / 2021</div>
          <div className="p-2 company">
            Shecodes Front-end Development Bootcamp
          </div>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-4" id="connect-bar"></div>
        <div className="col-6 d-flex flex-row-reverse justify-content-between">
          <div className="p-2 date">Online</div>
          <div className="p-2 company">
            Introduction to HTML, CSS, Javascipt React.js framework and
            responsive design
          </div>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-4" id="connect-bar"></div>
        <div className="col-6 d-flex flex-row-reverse justify-content-between">
          <div className="p-2 date">2019 / 2022</div>
          <div className="p-2 company">
            Lucerne University of Applied Arts and Sciences
          </div>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-4" id="connect-bar"></div>
        <div className="col-6 d-flex flex-row-reverse justify-content-between">
          <div className="p-2 date">Lucerne, Switzerland</div>
          <div className="p-2 company">
            BA in Product and Industrial Design, specialization in Design
            Management
          </div>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-4" id="connect-bar"></div>
        <div className="col-6 d-flex flex-row-reverse justify-content-between">
          <div className="p-2 date">2016 / 2019</div>
          <div className="p-2 company">
            Singapore Polytechnic
          </div>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-4" id="connect-bar"></div>
        <div className="col-6 d-flex flex-row-reverse justify-content-between">
          <div className="p-2 date">Singapore</div>
          <div className="p-2 company">
            Diploma in Digital Animation, specialization in 3D lighting and composition
          </div>
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
