import React from "react";
import "../styles/About.css";
import Footer from "./Footer";
// import CVPhoto from "../images/CV_photo.png";
import CVPhoto from "../images/CV_photo1.jpeg";

import { FileCode, Tree, Atom, ArrowUpRight} from "phosphor-react";


export default function About() {
  return (
    <div className="About">
      {/* <div className="row">
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
      </div> */}
      <div className="d-flex justify-content-between">
        <div className="left-col1">
          <h1>Hi I’m Grace Wu, </h1>
          <h1>interfacer designer &amp; developer.</h1>
          <p>
            I am a designer who can not only create visually appealing content
            but also transform them into code <FileCode size={32} /> (Sounds
            cool right!) When the internet is down you can find me frolicking in
            the woods or alps <Tree size={32} />, cooking or reading a book.{" "}
          </p>{" "}
          <p>
            I am open to internships and full-time positions in UX design or
            service design field <Atom size={32} />.
          </p>
        </div>
        <div className="right-col1">
          <img src={CVPhoto} className="CVphoto img-fluid" alt="" />
        </div>
      </div>
      <hr
        style={{
          height: 1,
          borderColor: "#1A1A1A",
        }}
      />
      <div className="d-flex flex-start connect-bar">
        <div className="left-col connect">
          Let's connect <ArrowUpRight size={20} />
        </div>
        <div className="right-col connect">
          <div>grace.xuer.wu@gmail.com</div>
          <a href="">View my resume </a>
        </div>
      </div>
      <hr
        style={{
          height: 1,
          borderColor: "#1A1A1A",
        }}
      />
      <Footer />
    </div>
  );
}
