import React from "react";
import "../styles/TestPage2.css";
import "../styles/FeaturedProjects.css";
import SchindlerHeroImage from "../images/Schindler_HeroImg.png";


// Gallery
import SchindlerVisitImage1 from "../images/SchindlerProj/schindlerVisit1.jpg";
import SchindlerVisitImage2 from "../images/SchindlerProj/schindlerVisit2.jpg";
import SchindlerVisitImage3 from "../images/SchindlerProj/schindlerVisit3.jpg";
import SchindlerVisitImage4 from "../images/SchindlerProj/schindlerVisit4.jpg";

import InterviewAnalysis1 from "../images/SchindlerProj/InterviewAnalysis1.jpg";
import InterviewAnalysis2 from "../images/SchindlerProj/InterviewAnalysis2.jpg";

import GoogleSurvey from "../images/SchindlerProj/GoogleSurvey.png";

import GenderMap from "../images/SchindlerProj/GenderMap.png";

import ConceptStrategy from "../images/SchindlerProj/ConceptStrategy.png"

// import MajorInsights from "../images/SchindlerProj/MajorInsights.png";
import Opportunities from "../images/SchindlerProj/Opportunities1.png";
import DesignIntervention1 from "../images/SchindlerProj/DesignIntervention01.png";
import DesignIntervention2 from "../images/SchindlerProj/DesignIntervention02.png";

// Components
import CarouselGallery from "./CarouselGallery";
import VideoComponent from "./VideoComponent";


export default function TestPage2() {
  return (
    <div className="TestPage2 center-container">
      <div className="content">
        <img
          src={SchindlerHeroImage}
          className="schindler-hero centered-image img-fluid"
          alt=""
        />
        <h1 className="bold-text">Motivating Girls To Join The STEM World</h1>
        <hr />
        <div className="container">
          <div className="row align-items-start timeline">
            <div className="col bold-text projDetails">Timeline</div>
            <div className="col bold-text projDetails">My Role</div>
            <div className="col bold-text projDetails">Collaboration</div>
            <div className="col bold-text projDetails">Organization</div>
          </div>
          <div className="row align-items-start">
            <div className="col">1.5 months</div>
            <div className="col">My Role</div>
            <div className="col">Kaho Sakuta, Kevin Pardal</div>
            <div className="col">Schindler AG</div>
          </div>
          <hr />
          <h2 className="bold-text">
            Why are there so few girls applying as schindler technicians?
          </h2>
          <div>Background</div>
          <div>
            Schindler AG is an elevator and mobility company, seeking to address
            the shortage of young female applicants for the elevator technician
            apprenticeship program. They are looking for ways and solutions to
            improve gender diversity among their programme.
          </div>
          <h3 className="bold-text">Problem and Solution</h3>
          <div>Background</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <h3 className="bold-text">Desk Research</h3>
          <div className="row">
            <div className="col-4">
              <div>
                We explored the question of why there are so few female
                applicants for Schindler technician roles, challenging gender
                stereotypes in job choices. We found that gender differentiation
                and equality significantly impact career decisions. To
                understand the issue better, we conducted desk research and
                created a gender map to visualize patterns and connections among
                factors.
              </div>
            </div>
            <div className="col-8">
              <img src={GenderMap} alt="" class="img-fluid" />
            </div>
          </div>
          <h3>Empathise first</h3>
          <div>Field trip to Schindler apprenticeship facility</div>
          <CarouselGallery
            imageOne={SchindlerVisitImage1}
            imageTwo={SchindlerVisitImage2}
            imageThree={SchindlerVisitImage3}
            imageFour={SchindlerVisitImage4}
          />
          <h3 className="bold-text">Conducting Interviews</h3>
          <div>
            Utilizing ethnographic interviews, the research aimed to uncover
            candid insights into why young women may not consider pursuing
            careers as elevator technicians. Additionally, it aimed to gain a
            deeper understanding of the values held by Schindler employees. An
            aditional interview was done with a female engineering student to
            understand her perspective of studying and working in a male
            dominated field. One of the key questions asked was "What motivated
            your career choice?" The findings were then classified and grouped
          </div>
          <div className="container">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src={InterviewAnalysis1} alt="" class="img-fluid" />
                </div>
                <div className="col-md-6">
                  <img src={InterviewAnalysis2} alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <h3>Qualitative research</h3>
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-6">
                Google surveys were also sent out, targeting adolescent girls
                aged 13 to 16. The primary objective of these surveys was to
                gain insights into the factors that influence young women when
                making decisions about their career paths. Additionally, the
                survey enabled respondents to include visuals, providing a
                tangible representation of their thoughts and ideas
              </div>
              <div class="col-md-6">
                <img src={GoogleSurvey} alt="" class="img-fluid" />
              </div>
            </div>
          </div>
          <h3>Data Analysis</h3>
          <div></div>
          <h3>Major Insights</h3>
          <div>
            The data from the surveys were collected and classfified using the
            affinity mapping method, where keywords were clustered thus helping
            to identfify general and overarching themes.
          </div>
          <div className="row">
            <div className="col-4 bold-text">
              1. Need for the visibility of a female role model
            </div>
            <div className="col-8">
              Girls need a role model to look up to who can offer them support
              and knowledge based on their own experiences
            </div>
          </div>
          <div className="row">
            <div className="col-4 bold-text">2. Modernization of the job</div>
            <div className="col-8">
              The elevator technician(ET) profession has developed over the
              years, and is no longer as physically labourious as it used to be.
            </div>
          </div>
          <div className="row">
            <div className="col-4 bold-text">
              3. Create awareness of opportunities for growth{" "}
            </div>
            <div className="col-8">
              The ET profession needs to be marketed as a job with a future
              career development route
            </div>
          </div>
          <h3>Areas of opportunities for design intervention</h3>
          <img src={Opportunities} alt="" className="" />
          <h3>Final design intervention concept</h3>
          <div className="row">
            <div className="col-4">
              <img
                src={DesignIntervention1}
                alt=""
                className="img-fluid shadow-sm"
              />
            </div>
            <div className="col-8">
              <img
                src={DesignIntervention2}
                alt=""
                className="img-fluid shadow-sm"
              />
            </div>
          </div>
          <h3>How the concept works</h3>
          <img src={ConceptStrategy} alt="" class="img-fluid" />
          <h3>Digital Prototype</h3>
          <h3>User Story</h3>
          <h3>What i learnt</h3>
        </div>
      </div>
    </div>
  );
}
