import React from "react";
import "../styles/Hero.css";


//Phosphor icon import
import { Cursor } from "phosphor-react";
import { SmileySticker } from "phosphor-react";

import illustrationPlaceholder from "../images/illustration_placeholder.jpeg";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="row">
        <div className="col-sm-8 flex-sm-row-reverse flex-column">
        <h1>
        Hi! I'm <span id="name">Grace</span> <SmileySticker size={32} />
      </h1>
      <h2>
        I am a<span id="role"> multidisciplinary product designer </span> <br />{" "}
        with a passion for creating better experiences for{" "}
        <strike>users</strike> people <br /> in the digital space{" "}
        <Cursor size={32} />
      </h2>
      <br />
      <h3>
        <span className="">
          Find me on{" "}
          <a href="https://github.com/gracexuerwu" target="_blank" className="hero-link">
            Github
          </a>{" "}
          /{" "}
          <a href="https://www.linkedin.com/in/grace-ade-wu/" target="_blank" className="hero-link">
            Linkedin
          </a>
          , or just <a href="mailto:grace.xuer.wu@gmail.com" className="hero-link">send me an email</a> saying hi.
        </span>
      </h3>
      <h4 className="flashing-text">
        🚫 This site is under construction till further notice 🚫
      </h4>
      <a href="#FeaturedProjects" className="button">
        What i do ↓
      </a>
        </div>
        <div className="col-sm-4 flex-sm-row-reverse flex-column">
        <img src={illustrationPlaceholder} alt="Description of the image" className="illustrationPlaceholder" />
        </div>
      </div>
     
    </div>
  );
}
