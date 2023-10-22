import React from "react";
import "../styles/TestPage2.css";
import "../styles/FeaturedProjects.css";
import SchindlerHeroImage from "../images/Schindler_HeroImg.png";

import ImageViewer from "./ImageViewer";

// Gallery
import SchindlerVisitImage1 from "../images/SchindlerProj/schindlerVisit1.jpg";
import SchindlerVisitImage2 from "../images/SchindlerProj/schindlerVisit2.jpg";
import SchindlerVisitImage3 from "../images/SchindlerProj/schindlerVisit3.jpg";
import SchindlerVisitImage4 from "../images/SchindlerProj/schindlerVisit4.jpg";

import InterviewAnalysis1 from "../images/SchindlerProj/InterviewAnalysis1.jpg";
import InterviewAnalysis2 from "../images/SchindlerProj/InterviewAnalysis2.jpg";

import GoogleSurvey from "../images/SchindlerProj/GoogleSurvey.png";

import GenderMap from "../images/SchindlerProj/GenderMap.png";

import ConceptStrategy from "../images/SchindlerProj/ConceptStrategy.png";

import DataAnalysis from "../images/SchindlerProj/DataAnalysis.jpeg";

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
            Would you as a women apply for a job as an elevator technician?
          </h2>
          <div>Background</div>
          <div>
            The underrepresentation of women in technical fields, including
            science, technology, engineering, and mathematics (STEM), has been a
            topic of concern for many years. Schindler AG faces a similar
            challenge with a scarcity of female applicants for technician roles.
            Despite the company's dedication to excellence in engineering and
            technical innovation, there is a noticeable gap in the number of
            female technicians applying to join the company. This
            underrepresentation raises questions about diversity, equal
            opportunity, and the need for positive change in the company's
            recruitment practices. Schindler AG recognizes the importance of
            tapping into a wider pool of talent and is looking for an
            recommendation to address this problem at hand
          </div>
          <h3 className="bold-text">Problem and Solution</h3>
          <div>Background</div>
          <div>
            The underrepresentation of women in technical fields, including
            science, technology, engineering, and mathematics (STEM), has been a
            topic of concern for many years. Schindler AG is no exception when
            it comes to women technicians.
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
              <img src={GenderMap} alt="" class="img-fluid rounded" />
            </div>
          </div>
          <h3>Empathise first</h3>
          <div className="paragraph">
            We were fortunate to visit the Schindler apprenticeship program,
            allowing us to closely observe and engage with the apprentices.
            During this field visit, we gained valuable insights into the daily
            routines of the apprentices, as well as the program's work
            environment and overall atmosphere. This field trip proved to be
            highly enlightening, as it fostered a sense of empathy towards the
            apprentices. Additionally, we had the opportunity to have a
            meaningful conversation with a female apprentice who stood out as
            the sole female participant in her cohort.
          </div>
          <CarouselGallery
            imageOne={SchindlerVisitImage1}
            imageTwo={SchindlerVisitImage2}
            imageThree={SchindlerVisitImage3}
            imageFour={SchindlerVisitImage4}
          />
          <h3 className="bold-text">Conducting Interviews</h3>
          <div className="paragraph">
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
                  <ImageViewer imageUrl={InterviewAnalysis2} />
                  {/* <img
                    src={InterviewAnalysis1}
                    alt=""
                    class="img-fluid rounded"
                  /> */}
                </div>
                <div className="col-md-6">
                  <img
                    src={InterviewAnalysis2}
                    alt=""
                    class="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>
          <h3>Qualitative research</h3>
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-6 column-text">
                Google surveys were also sent out, targeting adolescent girls
                aged 13 to 16. The primary objective of these surveys was to
                gain insights into the factors that influence young women when
                making decisions about their career paths. Additionally, the
                survey enabled respondents to include visuals, providing a
                tangible representation of their thoughts and ideas
              </div>
              <div class="col-md-6">
                <img src={GoogleSurvey} alt="" class="img-fluid rounded" />
              </div>
            </div>
          </div>
          <h3>Data Analysis</h3>
          <div>
            To gain a clearer and more insightful understanding of the collected
            data, we employed an affinity map. This map clusters keywords based
            on their natural affinities, thereby revealing common themes. By
            organizing recurring details into groups using post-it notes, we
            identified overarching themes that allowed the voices of the users
            to take shape. Through this process, we began to discern their
            needs, concerns, and aspirations more distinctly.
          </div>
          <img
            src={DataAnalysis}
            className="schindler-hero centered-image img-fluid rounded"
            alt=""
          />
          <div></div>
          <h3>Major Insights</h3>
          {/* <div className="paragraph">
            The data from the surveys were collected and classfified using the
            affinity mapping method, where keywords were clustered thus helping
            to identfify general and overarching themes.
          </div> */}
          <div className="row list">
            <div className="col-4 bold-text">
              1. Need for the visibility of a female role model
            </div>
            <div className="col-8">
              Girls need a role model to look up to who can offer them support
              and knowledge based on their own experiences
            </div>
          </div>
          <div className="row list">
            <div className="col-4 bold-text">2. Modernization of the job</div>
            <div className="col-8">
              The elevator technician(ET) profession has developed over the
              years, and is no longer as physically labourious as it used to be.
            </div>
          </div>
          <div className="row list">
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
                className="img-fluid shadow-sm rounded"
              />
            </div>
            <div className="col-8">
              <img
                src={DesignIntervention2}
                alt=""
                className="img-fluid shadow-sm rounded"
              />
            </div>
          </div>
          <h3>User Story</h3>
          <h3>How the concept works</h3>
          <div className="paragraph">
            The system illustrates the connection between prospective
            apprentices and female technicians. By providing S.T.E.M activities
            and support to young women, we aim to involve them in hands-on
            workshops, thereby enhancing the likelihood of their participation
            in the apprenticeship program. Simultaneously, these workshops
            present an opportunity for employed female technicians to receive
            training, serve as role models for young girls, and eventually
            become mentors for future participants in the hands-on workshops.
          </div>
          <img src={ConceptStrategy} alt="" class="img-fluid rounded" />
          <h3>Digital Prototype</h3>

          <h3>What i learnt</h3>
        </div>
      </div>
    </div>
  );
}
