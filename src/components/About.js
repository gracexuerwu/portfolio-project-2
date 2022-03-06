import React from "react";
import "../styles/About.css";
import Footer from "./Footer";
// import CVPhoto from "../images/CV_photo.png";
import CVPhoto from "../images/CV_photo1.jpeg";

import { FileCode, Tree, Atom, ArrowUpRight, EnvelopeSimpleOpen} from "phosphor-react";


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
      <div className="row flex-column-reverse flex-sm-row">
        <div className="col-sm-6">
          <h1>Not your average designer.</h1>
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
        <div className="col-sm-6">
          <img src={CVPhoto} className="CVphoto img-fluid" alt="" />
        </div>
      </div>
      <hr
        style={{
          height: 1,
          borderColor: "#1A1A1A",
        }}
      />
      <div className="row">
        <div className="col-sm-3 connect-text">
          Let's connect <EnvelopeSimpleOpen size={32} />
        </div>
        <div className="col-sm-6 connect">
          <div className="email">grace.xuer.wu@gmail.com</div>
        </div>
        <div className="col-3"><a href="https://www.youtube.com/watch?v=y0LwoUi_Kcw&t=1321s" className="resumeButton">View my resume </a></div>
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
