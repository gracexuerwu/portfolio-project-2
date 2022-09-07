import React from "react";
import "../styles/Hero.css";

// import Lottie from "lottie-react";
// import arrow from "../animations/arrow.json";

//Phosphor icon import
import { MapPinLine } from "phosphor-react";

export default function Hero() {
  return (
    <div className="Hero">
      <h1>
       Hi! 👋  I'm <span className="bold" id="name">Grace.</span>
      </h1>
      <h2>
        I am a<span className="bold" id="role"> Multidisciplinary Product Designer </span>👩🏻‍💻{" "}
        with a passion for creating better experiences for <strike>users</strike> people.{" "}
      </h2>
      <br />
      {/* <h4>What i do ↓</h4> */}
      <a href="#FeaturedProjects" className="button">What i do ↓</a>
      {/* <div className="row">
        <div className="col-9"></div>
        <div className="col-3">
          <Lottie animationData={arrow} className="arrowAnimation" />
        </div>
      </div> */}
    </div>
  );
}