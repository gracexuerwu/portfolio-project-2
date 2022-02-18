import React from "react";
import "../styles/FeaturedProjects.css";

//Phosphor icon import
import { Link, GithubLogo } from "phosphor-react";

export default function ProjectComponent(props) {
  return (
    <div>
      <img
        src={props.image}
        className="img-fluid text-center placeholder-img rounded projectImage"
        alt=""
      />
      <div className="row ProjectComponent">
        <div className="col-10">
          {" "}
          <h4>Weather App</h4>
        </div>
        <div className="col-1 linksLogo">
          <Link size={30} />
        </div>
        <div className="col-1 linksLogo">
          <GithubLogo size={30} />
        </div>
      </div>
      <div className="projectDescription">
        Weather application coded with Openweathermap API integration for live
        weather information. Features a day and night background tuned to your
        local time
      </div>
      <span className="projectSoftwares">Javascript</span>
      <span className="projectSoftwares">Bootstrap</span>
    </div>
  );
}
