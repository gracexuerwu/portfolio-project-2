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
// import SexualHealth2Thumbnail from "../images/Sexualhealth02Thumbnail.png";
import Carandache1Thumbnail from "../images/Caradache01_Thumbnail.png";
import Carandache2Thumbnail from "../images/Caradache02_Thumbnail.png";
import Medicalpackaging1Thumbnail from "../images/Medical packaging01_Thumbnail.png";
import Medicalpackaging2Thumbnail from "../images/Medical packaging02_Thumbnail.png";

export default function FeaturedProjects() {
  return (
    <div className="FeaturedProjects" id="FeaturedProjects">
      <h2>FEATURED PROJECTS</h2>
      <div className="row projectRow d-flex justify-content-between">
        <div className="col-sm-6">
          <ProjectComponent image={WeatherAppThumbnail} />
        </div>
        <div className="col-sm-6">
          <ProjectComponent image={ReactWeatherAppThumbnail} />
        </div>
      </div>
      <div className="row projectRow">
        <div className="col-sm-6">
          <ProjectComponent image={DictionaryAppThumbnail} />
        </div>
        <div className="col-sm-6">
          <ProjectComponent image={LunarBirthdayCalendar_Thumbnail} />
        </div>
      </div>
      <div className="row projectRow">
        <div className="col-sm-6">
          <ProjectCarouselComponent
            imageOne={Schindler2Thumbnail}
            imageTwo={Schindler3Thumbnail}
            alt="hsdkjh"
          />
        </div>
        <div className="col-sm-6">
          <ProjectCarouselComponent
            imageOne={Schindler2Thumbnail}
            imageTwo={Schindler3Thumbnail}
            alt="hsdkjh"
          />
        </div>
      </div>
      <div className="row projectRow">
        <div className="col-sm-6">
          <ProjectCarouselComponent
            imageOne={Carandache1Thumbnail}
            imageTwo={Carandache2Thumbnail}
            alt="hsdkjh"
          />
        </div>
        <div className="col-sm-6">
          <ProjectCarouselComponent
            imageOne={Carandache1Thumbnail}
            imageTwo={Carandache2Thumbnail}
            alt="hsdkjh"
          />
        </div>
      </div>
    </div>
  );
}
