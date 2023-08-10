import React from "react";
import "../styles/About.css";
import Footer from "./Footer";
// import CVPhoto from "../images/CV_photo.png";
// import CVPhoto from "../images/CV_photo1.jpeg";
import Experience from "./Experience";
import Education from "./Education";
import { ChatTeardropDots } from "phosphor-react";



export default function About() {
  return (
    <div className="About">
      <div className="row flex-column-reverse flex-md-row bio-row">
        <div className="col-md-7">
          <h1>
            Grace Wu is a product designer crafting systems and experiences in
            Munich, Germany.
          </h1>
        </div>
        <div className="col-md-5"></div>
      </div>
      <hr
        style={{
          height: 1,
          borderColor: "#1A1A1A",
        }}
      />
      <div className="row justify-content-between AboutSection">
        <div className="col-4 bold" id="connect-bar">
          <ChatTeardropDots size={32} /> &nbsp;
          About
        </div>
        {/* <div className="flex-item-center connect">
          <div className="email">grace.xuer.wu@gmail.com</div>
        </div> */}
        <div className="col-6">
          {/* <a
            href="https://drive.google.com/file/d/1zgpnmVx8RVfXKgMu7Dh6K1jaqdasRDSY/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="resumeButton"
          >
            View my resume{" "}
          </a> */}
          Originally from Singapore and started my design journey with a love
          for 3D design and animation. Later, I went to Switzerland for my
          bachelor's degree in design management, where I learned how to blend
          creativity with strategy. Then, I headed to Munich, Germany for an
          internship at BMW. There, I worked as an interaction designer,
          focusing on augmented reality.
          <br /> <br />
          I'm passionate about making digital experiences that feel real and
          meaningful. My journey has taken me from Singapore's energy to
          Switzerland's precision and finally to Germany's innovation hub. I'm
          excited to keep growing as a designer and exploring new ways to merge
          creativity and technology.
        </div>
      </div>
      <Experience />
      <Education />
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
