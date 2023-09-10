import React from "react";
import "../styles/TestPage2.css";
import SchindlerHeroImage from "../images/Schindler_HeroImg.png";

export default function TestPage2() {
  return (
    <div className="Play">
      <img src={SchindlerHeroImage} className="schindler-hero" alt="" />
      <h1>Title</h1>
      <hr />
      <div className="container">
        <div className="row align-items-start">
          <div className="col">Timeline</div>
          <div className="col">My Role</div>
          <div className="col">Collaboration</div>
          <div className="col">Organization</div>
        </div>
        <div className="row align-items-start">
          <div className="col">1.5 months</div>
          <div className="col">My Role</div>
          <div className="col">Kaho Sakuta, Kevin Pardal</div>
          <div className="col">Schindler AG</div>
        </div>
      </div>
    </div>
  );
}
