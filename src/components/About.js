import React from "react";
import "../styles/About.css";
// import CVPhoto from "../images/CV_photo.png";
import CVPhoto from "../images/CV_photo1.jpeg";

export default function About() {
  return (
    <div className="About">
      <div className="row">
        <div className="col-7">
          <h1>Hi I’m Grace Wu, </h1>
          <h1>interfacer designer &amp; developer.</h1>
          <div className="about-text">
            <p>
              I’m a self-taught front-end interface developer, and am currently
              pursuing a BA in Product and industrial design, seeking to create
              human-centred design for and with people.
              When the internet is down you can find me frolicking in the woods
              or alps, cooking or reading a book.{" "}
            </p>
            <p>
              I am open to internships and full-time positions in the front-end
              development or service design field.
            </p>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <img src={CVPhoto} className="CVphoto img-fluid" alt="" />
        </div>
      </div>
    </div>
    
  );
}
