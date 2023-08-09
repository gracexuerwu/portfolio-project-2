import React from "react";
import "../styles/About.css";
import Footer from "./Footer";
// import CVPhoto from "../images/CV_photo.png";
import CVPhoto from "../images/CV_photo1.jpeg";
import Experience from "./Experience";
import Education from "./Education";

// import { FileCode, Tree, Atom } from "phosphor-react";

export default function About() {
  return (
    <div className="About">
      <div className="row flex-column-reverse flex-md-row bio-row">
        <div className="col-md-7">
          <h1>
            Grace Wu is a product designer crafting systems and experiences in
            Munich, Germany.
          </h1>
          {/* <p>
            I am a designer who can not only create visually appealing content
            but also transform them into code &nbsp;🖥 &nbsp;(Sounds
            cool right!) When the internet is down you can find me frolicking in
            the woods or alps &nbsp;🏔, cooking or reading a book.{" "}
          </p>{" "} */}
          {/* <p>
            I am open to internships and full-time positions in UX design or
            service design field &nbsp;🪄.
          </p> */}
        </div>
        <div className="col-md-5">
          {/* <img src={CVPhoto} className="CVphoto img-fluid" alt="" /> */}
        </div>
      </div>
      <hr
        style={{
          height: 1,
          borderColor: "#1A1A1A",
        }}
      />
      <div className="row justify-content-between">
        <div className="col-4" id="connect-bar">
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
          Originally from Lisbon, my professional journey began at Young &
          Rubicam Portugal, where I worked on illustration, storyboarding, and
          post-production projects. It was during this time that my passion for
          pixel-perfect work, screen design and the way ideas can be
          communicated in the digital world began. Since then, I’ve been working
          as a full-time digital designer while pursuing illustration projects
          on the side. My passion to solve problems and create visually
          captivating work led me on a journey around the world. ’m fortunate to
          work in a team where we collaborate openly, strive for excellence and
          craft meaningful digital experiences that impacts people’s lives.
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
