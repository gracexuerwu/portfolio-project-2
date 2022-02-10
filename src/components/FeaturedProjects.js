import React from "react";
import "../styles/FeaturedProjects.css";
import ProjectComponent from "./ProjectComponent";

//images import
import ReactWeatherAppThumbnail from "../images/ReactWeatherApp_Thumbnail.png";
import WeatherAppThumbnail from "../images/WeatherApp_Thumbnail.png";
import DictionaryAppThumbnail from "../images/ReactDictApp_Thumbnail.png";
import LunarBirthdayCalendar_Thumbnail from "../images/LunarBirthdayCalendar_Thumbnail.png";


export default function FeaturedProjects() {
  return (
    <div className="FeaturedProjects">
      <h2>FEATURED PROJECTS</h2>
      <div className="row">
        <div className="col-6">
          <ProjectComponent image={WeatherAppThumbnail} />
        </div>
        <div className="col-6">
          <ProjectComponent image={ReactWeatherAppThumbnail} />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ProjectComponent image={DictionaryAppThumbnail} />
        </div>
        <div className="col-6">
          <ProjectComponent image={LunarBirthdayCalendar_Thumbnail} />
        </div>
      </div>
    </div>
  );
}
