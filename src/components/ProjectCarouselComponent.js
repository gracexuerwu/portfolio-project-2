import React from "react";
import "../styles/FeaturedProjects.css";
//Phosphor icon import
import { Link, GithubLogo } from "phosphor-react";


export default function ProjectCarouselComponent(props) {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={props.imageOne}
            className="d-block w-100 rounded placeholder-img"
            alt={props.alt}
          />
        </div>
        <div className="carousel-item">
          <img
            src={props.imageTwo}
            className="d-block w-100 rounded placeholder-img"
            alt={props.alt}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="row ProjectComponent">
        <div className="col-8">
          {" "}
          <h4>Weather App</h4>
        </div>
        <div className="col-2 linksLogo">
          <Link size={30} />
        </div>
        <div className="col-2 linksLogo">
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
