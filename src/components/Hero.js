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
        I am a
        <span id="role"> multidisciplinary product designer </span> <br /> with
        a passion for creating better experiences for <strike>users</strike>{" "}
        people <br /> in the digital space <Cursor size={32} />
      </h2>
      <br />
      <h3><span className="">Find me on <a href="https://github.com/gracexuerwu" target="_blank">Github</a> / <a href="https://www.linkedin.com/in/grace-ade-wu/" target="_blank">Linkedin</a>, or just <a href="">send me an email</a> saying hi.</span></h3>
      <h4 className="flashing-text">🚫 This site is under construction till further notice 🚫</h4>
      <a href="#FeaturedProjects" className="button">
        What i do ↓
      </a>
    </div>
  );
}
