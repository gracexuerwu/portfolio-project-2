import React from "react";
import "../styles/Education.css";
import { GraduationCap } from "phosphor-react";

export default function Education() {
  return (
    <div className="Education">
      <div className="flex-container space-between">
        <div className="flex-item-left">
          <h2>
          🎓 &nbsp; EDUCATION 
          </h2>
        </div>
        <div className="flex-item-center">
          <h3>German B2 Level</h3>
          <ul>
            <li className="educationLocation">Switzerland</li>
            <li className="educationDetail">
              - Achieved advanced and fluency in the German language. Obtained Deutsch TELC B2 Certificate. (Common European Framework of Reference for Languages) 
            </li>
          </ul>
        </div>
        <div className="flex-item-right">
          <div>2020 / 2022</div>
        </div>
      </div>
      <div className="flex-container space-between">
        <div className="flex-item-left">
        </div>
        <div className="flex-item-center">
          <h3>Shecodes Front-end Development Bootcamp</h3>
          <ul>
            <li className="educationLocation">Online</li>
            <li className="educationDetail">
              - Introduction to HTML, CSS, Javascipt React.js framework and responsive design. During the course of the bootcamp, I designed the UI and developed several application projects.
            </li>
          </ul>
        </div>
        <div className="flex-item-right">
          <div>2021 / 2021</div>
        </div>
      </div>
      <div className="flex-container space-between">
        <div className="flex-item-left">
          {/* <h2>
            EDUCATION <GraduationCap size={35} className="icon" />
          </h2> */}
        </div>
        <div className="flex-item-center">
          <h3>Lucerne University of Applied Arts and Sciences</h3>
          <ul>
            <li className="educationLocation">Switzerland</li>
            <li className="educationDetail">
              - BA in Product and Industrial Design, specialization in Design
              Management.
            </li>
          </ul>
        </div>
        <div className="flex-item-right">
          <div>2019 / 2022</div>
        </div>
      </div>
      <div className="flex-container space-between">
        <div className="flex-item-left"></div>
        <div className="flex-item-center">
          <h3>Singapore Polytechnic</h3>
          <ul>
            <li className="educationLocation">Singapore</li>
            <li className="educationDetail">
              - Diploma in Digital Animation and Visual effects.{" "}
            </li>
          </ul>
        </div>
        <div className="flex-item-right">
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
