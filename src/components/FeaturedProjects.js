import React from "react";
import "../styles/FeaturedProjects.css";
import ProjectComponent from "./ProjectComponent";
import ProjectCarouselComponent from "./ProjectCarouselComponent";

//images import
import ReactWeatherAppThumbnail from "../images/ReactWeatherApp_Thumbnail.png";
import WeatherAppThumbnail from "../images/WeatherApp_Thumbnail.png";
import DictionaryAppThumbnail from "../images/ReactDictApp_Thumbnail.png";
import LunarBirthdayCalendar_Thumbnail from "../images/LunarBirthdayCalendar_Thumbnail.png";
import Schindler2Thumbnail from "../images/Schindler2_Thumbnail.png";
import Schindler3Thumbnail from "../images/Schindler3_Thumbnail.png";
import SexualHealth1Thumbnail from "../images/Sexualhealth1_Thumbnail.png";
import SexualHealth2Thumbnail from "../images/Sexualhealth2_Thumbnail.png";
import Carandache1Thumbnail from "../images/Carandache1_Thumbnail.png";
import Carandache2Thumbnail from "../images/Caradache2_Thumbnail.png";
import Medicalpackaging1Thumbnail from "../images/Medical packaging1_Thumbnail.png";
import Medicalpackaging2Thumbnail from "../images/Medical packaging2_Thumbnail.png";

export default function FeaturedProjects() {
  return (
    <div className="FeaturedProjects">
      <h2>FEATURED PROJECTS</h2>
      <div className="row projectRow d-flex justify-content-between">
        <div className="col-6">
          <ProjectComponent image={WeatherAppThumbnail}/>
        </div>
        <div className="col-6">
          <ProjectComponent image={ReactWeatherAppThumbnail} />
        </div>
      </div>
      <div className="row projectRow">
        <div className="col-6">
          <ProjectComponent image={DictionaryAppThumbnail} />
        </div>
        <div className="col-6">
          <ProjectComponent image={LunarBirthdayCalendar_Thumbnail} />
        </div>
      </div>
      <div className="row projectRow">
        <div className="col-6">
          <ProjectCarouselComponent imageOne={Schindler2Thumbnail} imageTwo={Schindler3Thumbnail} alt="hsdkjh" />
        </div>
        <div className="col-6">
          <ProjectCarouselComponent imageOne={SexualHealth1Thumbnail} ImageTwo={SexualHealth2Thumbnail} alt="hsdkjh" />
        </div>
      </div>
    </div>
  );
}
