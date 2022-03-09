import React from "react";
import "../styles/About.css";
import Footer from "./Footer";
// import CVPhoto from "../images/CV_photo.png";
import CVPhoto from "../images/CV_photo1.jpeg";

import { FileCode, Tree, Atom, ArrowsLeftRight} from "phosphor-react";


export default function About() {
  return (
    <div className="About">
      <div className="row flex-column-reverse flex-md-row bio-row">
        <div className="col-md-7">
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
        <div className="col-md-5">
          <img src={CVPhoto} className="CVphoto img-fluid" alt="" />
        </div>
      </div>
      <hr
        style={{
          height: 1,
          borderColor: "#1A1A1A",
        }}
      />
      <div className="flex-container space-between">
        <div className="flex-item-left connect-text" id="connect-bar">
          Let's connect  <ArrowsLeftRight size={35} className="icon" />
        </div>
        <div className="flex-item-center connect">
          <div className="email">grace.xuer.wu@gmail.com</div>
        </div>
        <div className="flex-item-right"><a href="https://www.youtube.com/watch?v=y0LwoUi_Kcw&t=1321s" target="_blank" rel="noreferrer" className="resumeButton">View my resume </a></div>
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
