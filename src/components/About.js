import React from "react";
import "../styles/About.css";
// import CVPhoto from "../images/CV_photo.png";
import CVPhoto from "../images/CV_photo1.jpeg";

export default function About() {
  return (
    <div className="About">
      <div className="row">
        <div className="col">
          <h1>Hi I’m Grace Wu, interfacer designer &amp; developer.</h1>
        </div>
        <div className="col">
        <img
        src={CVPhoto}
        className="CVphoto img-fluid"
        alt=""
      />
        </div>
      </div>
    </div>
  );
}
