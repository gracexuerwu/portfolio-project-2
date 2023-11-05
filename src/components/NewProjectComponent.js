import React from "react";
import "../styles/FeaturedProjects.css";
import ProjectComponent from "./ProjectComponent";
// import ProjectCarouselComponent from "./ProjectCarouselComponent";

import { Link } from "react-router-dom";

//images import
// import ReactWeatherAppThumbnail from "../images/ReactWeatherApp1_Thumbnail.png";
// import WeatherAppThumbnail from "../images/WeatherApp_Thumbnail1.png";
// import DictionaryAppThumbnail from "../images/ReactDictApp1_Thumbnail.png";
// import LunarBirthdayCalendar_Thumbnail from "../images/LunarBirthdayCalendar1_Thumbnail.png";
// import Schindler2Thumbnail from "../images/Schindler01_Thumbnail.png";
// import Schindler3Thumbnail from "../images/Schindler02_Thumbnail.png";
// import SexualHealth1Thumbnail from "../images/Sexualhealth01_Thumbnail.png";
// import SexualHealth2Thumbnail from "../images/Sexualhealth02_Thumbnail.png";
// import Carandache1Thumbnail from "../images/Caradache01_Thumbnail.png";
// import Carandache2Thumbnail from "../images/Caradache02_Thumbnail.png";
// import Medicalpackaging1Thumbnail from "../images/Medical packaging01_Thumbnail.png";
// import Medicalpackaging2Thumbnail from "../images/Medical packaging02_Thumbnail.png";
// import BAThesis1Thumbnail from "../images/BAthesis01_Thumbnail.png";
// import BAThesis2Thumbnail from "../images/BAthesis02_Thumbnail.png";

//New image imports
import ReactWeatherAppThumbnaillNEW from "../images/Thumbnails/ReactWeatherApp1_Thumbnail_New.png";
import WeatherAppThumbnailNEW from "../images/Thumbnails/WeatherApp_Thumbnail_New.png";
import DictionaryAppThumbnailNEW from "../images/Thumbnails/ReactDictApp1_Thumbnail_New.png";
import SchindlerThumbnailNEW from "../images/Thumbnails/Schindler01_Thumbnail_New.png";
import MedicalpackagingThumbnailNEW from "../images/Thumbnails/Medical packaging01_Thumbnail_New.png";
import LunarCalendarThumbnailNEW from "../images/Thumbnails/LunarBirthdayCalendar1_Thumbnail_New.png";
import CarandacheThumbnailNEW from "../images/Thumbnails/Carandache_Thumbnail_New.png";

export default function NewProjectComponent() {
  return (
    <div className="FeaturedProjects" id="FeaturedProjects">
      <div className="row projectRow">
        <div className="col-sm-6 px-5">
          <Link to="/testPage2" rel="noreferrer">
            <img
              src={SchindlerThumbnailNEW}
              className="projectThumbnail box-shadow enlarge-image"
              alt="STEM workshop for girls"
            ></img>
          </Link>
        </div>
        <div className="col-sm-6 px-5">
          <div className="project-name">
            Motivating girls to join the STEM World
          </div>
          <div className="project-subtitle">
            How can we devise a strategy to entice girls to explore S.T.E.M
          </div>
          <a href="" className="project-button" target="_blank" rel="noreferrer">View Project</a>
        </div>
      </div>
      <div className="row projectRow">
        <div className="col-sm-6 px-5">
          <div className="project-name">
           Cradle-to-Cradle Acessment for Medical blisters
          </div>
          <div className="project-subtitle">
            How can we devise a strategy to entice girls to explore S.T.E.M
          </div>
          <a href="" className="project-button" target="_blank" rel="noreferrer">View Project</a>
        </div>
        <div className="col-sm-6 px-5">
          <ProjectComponent image={MedicalpackagingThumbnailNEW} className="" />
          {/* <ProjectCarouselComponent
            imageOne={MedicalpackagingThumbnailNEW}
            imageTwo={Medicalpackaging2Thumbnail}
            alt="Medical packaging evaluation"
            description="The scope of this project, is to research and identify areas of
            opportunities that would enable medical packaging, namely the
            blister product to achieve circularity in it's product lifecycle."
            projectLink="https://drive.google.com/file/d/1YttEc0w1UM0DmRWkwN6M52hTAByGWRCN/view?usp=sharing"
            projectType="Sustainability"
            projectName="Evaluation On How Medical Packaging Can Be More Sustainable"
          /> */}
        </div>
      </div>
      <div className="row projectRow">
        <div className="col-sm-6 px-5">
          <Link to="/CaranDachePage" rel="noreferrer">
            <img
              src={CarandacheThumbnailNEW}
              className="projectThumbnail enlarge-image box-shadow"
              alt="Caran D'ache Concept"
            ></img>
          </Link>
        </div>
        <div className="col-sm-6 px-5">
          <div className="project-name">Design for Sustainability Concept</div>
          <div className="project-subtitle">
            How can we devise a strategy to entice girls to explore S.T.E.M
          </div>
          <a href="" className="project-button" target="_blank" rel="noreferrer">View Project</a>
        </div>
      </div>

      {/* <--Development projects--> */}
      <div className="row projectRow">
        <div className="col-sm-6 px-5">
          <div className="project-name">Weather App</div>
          <div className="project-subtitle">
            Created using Vanilla Javascript with Openweathermap API integration
            for live weather information
          </div>
          <a href="https://dazzling-meitner-238069.netlify.app/" className="project-button" target="_blank" rel="noreferrer">View Project</a>
        </div>
        <div className="col-sm-6 px-5">
          <ProjectComponent
            image={WeatherAppThumbnailNEW}
            projectName="Weather App"
            description="Weather application coded with Vanilla Javascript with Openweathermap API integration for live weather information. Features a day and night background which changes according to your local time."
            liveSiteLink="https://dazzling-meitner-238069.netlify.app/"
            githubLink="https://github.com/gracexuerwu/vanilla-weather-app"
            software1="Javascript"
            software2="Bootstrap"
          />
        </div>
      </div>
      <div className="row projectRow">
        <div className="col-sm-6 px-5">
          <ProjectComponent
            image={ReactWeatherAppThumbnaillNEW}
            projectName="Weather App 2.0"
            description="Iterated version of the previous weather app but in React.js. It
            allows users to search for the weather at any location. Includes a
            Celcius and Fahrenheit temperature slider."
            liveSiteLink="https://hungry-yalow-e0bde5.netlify.app/"
            githubLink="https://github.com/gracexuerwu/weather-app-1-react"
            software1="React"
            software2="Bootstrap"
          />
        </div>
        <div className="col-sm-6 px-5">
          <div className="project-name">Weather App 2.0</div>
          <div className="project-subtitle">
            Iterated version of the previous weather app but in React.js.
            Includes geo location search and Celcius and Fahrenheit temperature
            slider
          </div>
          <a href="https://hungry-yalow-e0bde5.netlify.app/" className="project-button" target="_blank" rel="noreferrer">View Project</a>
        </div>
      </div>
      <div className="row projectRow">
        <div className="col-sm-6 px-5">
          <div className="project-name">Dictionary App</div>
          <div className="project-subtitle">
            Retro dictionary App that allows users to search for any word
            definition and pronunciation. Includes pictures that are associated
            with the searched word
          </div>
          <a href="https://loving-mccarthy-677ab0.netlify.app/" className="project-button" target="_blank" rel="noreferrer">View Project</a>
        </div>
        <div className="col-sm-6 px-5">
          <ProjectComponent
            image={DictionaryAppThumbnailNEW}
            projectName="Dictionary App"
            description="Retro dictionary App that allows users to search for any word definition and pronunciation. Includes pictures that are associated with the
            searched word."
            liveSiteLink="https://loving-mccarthy-677ab0.netlify.app/"
            githubLink="https://github.com/gracexuerwu/dictionary-project-react"
            software1="React"
            software2="Bootstrap"
          />
        </div>
      </div>
      <div className="row projectRow">
        <div className="col-sm-6 px-5">
          <ProjectComponent
            image={LunarCalendarThumbnailNEW}
            projectName="Lunar Calendar App"
            description="Ever wondered what your chinese zodiac is? Key in your birthday and find out what's your inner animal!"
            liveSiteLink="https://birthday-lunar-calendar.netlify.app/"
            githubLink="https://github.com/gracexuerwu/lunar-calendar-app"
            software1="React"
            software2="Bootstrap"
          />
        </div>
        <div className="col-sm-6 px-5">
          <div className="project-name">Lunar Calendar App</div>
          <div className="project-subtitle">
            Ever wondered what your chinese zodiac is? Key in your birthday and
            find out what's your inner animal!
          </div>
          <a href="https://birthday-lunar-calendar.netlify.app/" className="project-button" target="_blank" rel="noreferrer">View Project</a>
        </div>
      </div>

      {/* Old project layout */}
      {/* <div className="row projectRow">
        <div className="col-sm-6"></div>
        <div className="col-sm-6">
          <ProjectCarouselComponent
            imageOne={Medicalpackaging1Thumbnail}
            imageTwo={Medicalpackaging2Thumbnail}
            alt="Medical packaging evaluation"
            description="The scope of this project, is to research and identify areas of
            opportunities that would enable medical packaging, namely the
            blister product to achieve circularity in it's product lifecycle."
            projectLink="https://drive.google.com/file/d/1YttEc0w1UM0DmRWkwN6M52hTAByGWRCN/view?usp=sharing"
            projectType="Sustainability"
            projectName="Evaluation On How Medical Packaging Can Be More Sustainable"
          />
        </div>
      </div>
      <h2>&nbsp;Development</h2>
      <div className="row projectRow d-flex justify-content-between">
        <div className="col-sm-6">
          <ProjectComponent
            image={WeatherAppThumbnail}
            projectName="Weather App"
            description="Weather application coded with Vanilla Javascript with Openweathermap API integration for live weather information. Features a day and night background which changes according to your local time."
            liveSiteLink="https://dazzling-meitner-238069.netlify.app/"
            githubLink="https://github.com/gracexuerwu/vanilla-weather-app"
            software1="Javascript"
            software2="Bootstrap"
          />
        </div>
        <div className="col-sm-6">
          <ProjectComponent
            image={ReactWeatherAppThumbnail}
            projectName="Weather App 2.0"
            description="Iterated version of the previous weather app but in React.js. It
            allows users to search for the weather at any location. Includes a
            Celcius and Fahrenheit temperature slider."
            liveSiteLink="https://hungry-yalow-e0bde5.netlify.app/"
            githubLink="https://github.com/gracexuerwu/weather-app-1-react"
            software1="React"
            software2="Bootstrap"
          />
        </div>
      </div>
      <div className="row projectRow">
        <div className="col-sm-6">
          <ProjectComponent
            image={DictionaryAppThumbnail}
            projectName="Dictionary App"
            description="Retro dictionary App that allows users to search for any word definition and pronunciation. Includes pictures that are associated with the
            searched word."
            liveSiteLink="https://loving-mccarthy-677ab0.netlify.app/"
            githubLink="https://github.com/gracexuerwu/dictionary-project-react"
            software1="React"
            software2="Bootstrap"
          />
        </div>
        <div className="col-sm-6">
          <ProjectComponent
            image={LunarBirthdayCalendar_Thumbnail}
            projectName="Lunar Calendar App"
            description="Ever wondered what your chinese zodiac is? Key in your birthday and find out what's your inner animal!"
            liveSiteLink="https://birthday-lunar-calendar.netlify.app/"
            githubLink="https://github.com/gracexuerwu/lunar-calendar-app"
            software1="React"
            software2="Bootstrap"
          />
        </div>
      </div> */}
    </div>
  );
}
