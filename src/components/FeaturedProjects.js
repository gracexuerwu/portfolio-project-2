import React from "react";
import "../styles/FeaturedProjects.css";
import ProjectComponent from "./ProjectComponent";
import ProjectCarouselComponent from "./ProjectCarouselComponent";

//images import
import ReactWeatherAppThumbnail from "../images/ReactWeatherApp1_Thumbnail.png";
import WeatherAppThumbnail from "../images/WeatherApp_Thumbnail1.png";
import DictionaryAppThumbnail from "../images/ReactDictApp1_Thumbnail.png";
import LunarBirthdayCalendar_Thumbnail from "../images/LunarBirthdayCalendar1_Thumbnail.png";
import Schindler2Thumbnail from "../images/Schindler01_Thumbnail.png";
import Schindler3Thumbnail from "../images/Schindler02_Thumbnail.png";
import SexualHealth1Thumbnail from "../images/Sexualhealth01_Thumbnail.png";
import SexualHealth2Thumbnail from "../images/Sexualhealth02_Thumbnail.png";
import Carandache1Thumbnail from "../images/Caradache01_Thumbnail.png";
import Carandache2Thumbnail from "../images/Caradache02_Thumbnail.png";
import Medicalpackaging1Thumbnail from "../images/Medical packaging01_Thumbnail.png";
import Medicalpackaging2Thumbnail from "../images/Medical packaging02_Thumbnail.png";
import BAThesis1Thumbnail from "../images/BAthesis01_Thumbnail.png";
import BAThesis2Thumbnail from "../images/BAthesis02_Thumbnail.png";

export default function FeaturedProjects() {
  return (
    <div className="FeaturedProjects" id="FeaturedProjects">
      <h2>FEATURED PROJECTS</h2>
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
      </div>
      <div className="row projectRow">
        <div className="col-sm-6">
          <ProjectCarouselComponent
            imageOne={Schindler2Thumbnail}
            imageTwo={Schindler3Thumbnail}
            alt="hsdkjh"
            description="The project scope is based around the problem: Why working as an
                        elevator technician is not considered as a career for young Swiss
                        women? and what can be done to change this reality? The problem is
                        more than meets the eye."
            projectLink="https://drive.google.com/file/d/1PXK_a3s2DDxc3ScM1EPirW37xXrJpzoY/view?usp=sharing"        
            projectType="User Research"
            projectName="STEM Workshops for girls"    
          />
        </div>
        <div className="col-sm-6">
          <ProjectCarouselComponent
            imageOne={SexualHealth1Thumbnail}
            imageTwo={SexualHealth2Thumbnail}
            alt="hsdkjh"
            description="The scope of the project is to tackle a social issue, which is the
            lack of accessibility and availabe services that offer a discreet
            sexual health services and information to girls and young women."
            projectLink="https://drive.google.com/file/d/1J0Y47giqvQgeQTXFxWwb1zvRuC2G9a_q/view?usp=sharing" 
            projectType="Social Design"   
            projectName="Empowering girls to take charge of their sexual health"    
          />
        </div>
      </div>
      <div className="row projectRow">
        <div className="col-sm-6">
          <ProjectCarouselComponent
            imageOne={Carandache1Thumbnail}
            imageTwo={Carandache2Thumbnail}
            alt="hsdkjh"
            description="The scope of this project, is to examine an existing product in
            terms of 'Design for Sustainability' and how far have the parameters
            for this design approach been considered. Followed by developing a
            sustainable concept proposition with the core in mind, the
            implementation of a Cradle to Cradle life cycle."
            projectLink="https://drive.google.com/file/d/1dGZY0puOUWHbls45M3IFvw4tCvRioVys/view?usp=sharing"
            projectType="Sustainability"
            projectName="Circular color pencils"      
          />
        </div>
        <div className="col-sm-6">
          <ProjectCarouselComponent
            imageOne={Medicalpackaging1Thumbnail}
            imageTwo={Medicalpackaging2Thumbnail}
            alt="hsdkjh"
            description="The scope of this project, is to research and identify areas of
            opportunities that would enable medical packaging, namely the
            blister product to achieve circularity in it's product lifecycle."
            projectLink="https://drive.google.com/file/d/1YttEc0w1UM0DmRWkwN6M52hTAByGWRCN/view?usp=sharing"
            projectType="Sustainability"
            projectName="Evaluation on how medical packaging can be more sustainable"     
          />
        </div>
      </div>
      <div className="row projectRow">
        <div className="col-sm-6">
          <ProjectCarouselComponent
            imageOne={BAThesis1Thumbnail}
            imageTwo={BAThesis2Thumbnail}
            alt="hsdkjh"
            description="The scope of this project, is to examine an existing product in
            terms of 'Design for Sustainability' and how far have the parameters
            for this design approach been considered. Followed by developing a
            sustainable concept proposition with the core in mind, the
            implementation of a Cradle to Cradle life cycle."
            projectLink="https://drive.google.com/file/d/1dGZY0puOUWHbls45M3IFvw4tCvRioVys/view?usp=sharing"
            projectType="Sustainability"
            projectName="Circular color pencils"      
          />
        </div>
        <div className="col-sm-6">
        </div>
      </div>
    </div>
  );
}
