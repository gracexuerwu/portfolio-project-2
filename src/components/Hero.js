import React from "react";
import "../styles/Hero.css";

// import Lottie from "lottie-react";
// import arrow from "../animations/arrow.json";

//Phosphor icon import
import { Cursor } from "phosphor-react";
import { SmileySticker } from "phosphor-react";

export default function Hero() {
  return (
    <div className="Hero">
      <h1>
        Hi! I'm <span id="name">Grace</span> <SmileySticker size={32} />
      </h1>
      <h2>
        I am a research-driven
        <span id="role"> multidisciplinary product designer </span> <br /> with
        a passion for creating better experiences for <strike>users</strike>{" "}
        people <br /> in the digital space <Cursor size={32} />
      </h2>
      <br />
      <h3>Previously <span className="">@BMW Group</span></h3>
      <h4 className="flashing-text">🚫 This site is under construction 🚫</h4>
      <a href="#FeaturedProjects" className="button">
        What i do ↓
      </a>
    </div>
  );
}
