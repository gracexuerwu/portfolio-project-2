import React from "react";
import "../styles/TestPage2.css";
import SchindlerHeroImage from "../images/Schindler_HeroImg.png";

export default function TestPage2() {
  return (
    <div className="TestPage2 center-container">
      <div className="content">
        <img src={SchindlerHeroImage} className="schindler-hero centered-image" alt="" />
        <h1>Motivating Girls To Join The STEM World</h1>
        <hr />
        <div className="container timeline">
          <div className="row align-items-start">
            <div className="col bold-text">Timeline</div>
            <div className="col bold-text">My Role</div>
            <div className="col bold-text">Collaboration</div>
            <div className="col bold-text">Organization</div>
          </div>
          <div className="row align-items-start">
            <div className="col">1.5 months</div>
            <div className="col">My Role</div>
            <div className="col">Kaho Sakuta, Kevin Pardal</div>
            <div className="col">Schindler AG</div>
          </div>
          <h2>Why are there so few girls applying as schindler technicians?</h2>
          <div>Background</div>
          <div>
            Schindler AG is an elevator and mobility company, seeking to address
            the shortage of young female applicants for the elevator technician
            apprenticeship program. They are looking for ways and solutions to
            improve gender diversity among their programme.
          </div>
          <h3>Problem and Solution</h3>
          <div>Background</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <h3>Research Questions</h3>
          <div>Research question 1</div>
          <div>Research question 2</div>
          <div>Research question 3</div>
          <h3>Empathise first</h3>
          <div>Field trip to Schindler apprenticeship facility</div>
          <img src="" className="" alt="" />
          <h3>Learning about our users</h3>
          <div>
            Interviews with Schindler technicians and(Female) engineering
            students
          </div>
          <div>Qualitative research through ethnography probes</div>
          <div>(Insert google survey picture)</div>
          <div>Data analysis</div>
          <h3>Major Insights</h3>
          <div>Theme 1</div>
          <div>Theme 2</div>
          <div>Theme </div>
          <h3>Areas of opportunities for design intervention</h3>
          <h3>Final design intervention concept</h3>
          <h3>Concept strategy</h3>
          <h3>User Story</h3>
          <h3>What i learnt</h3>
        </div>
      </div>
    </div>
  );
}
