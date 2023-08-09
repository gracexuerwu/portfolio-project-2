import React from "react";
import "../styles/Hero.css";

// import Lottie from "lottie-react";
// import arrow from "../animations/arrow.json";

//Phosphor icon import
// import { MapPinLine } from "phosphor-react";

export default function Hero() {
  return (
    <div className="Hero">
      <h1>
       Hi! I'm <span id="name">Grace</span> 👩🏻‍💻
      </h1>
      <h2>
        I am a research-driven<span id="role"> multidisciplinary product designer </span>{" "}
        <br/> with a passion for creating better experiences for <strike>users</strike> people{" "} in the digital space 
      </h2>
      <br />
      <h3>Previously @BMW Group</h3>
      <a href="#FeaturedProjects" className="button">What i do ↓</a>
    </div>
  );
}