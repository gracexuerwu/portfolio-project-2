import React from "react";
import "../styles/FeaturedProjects.css";

export default function ImageGallery(props) {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100 rounded placeholder-img" src={props.imageOne} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 rounded placeholder-img" src={props.imageTwo} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 rounded placeholder-img" src={props.imageThree} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 rounded placeholder-img" src={props.imageFour} alt="Third slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>

    // <div
    //   id="carouselExampleFade"
    //   className="carousel slide carousel-fade ProjectComponent"
    //   data-bs-ride="carousel"
    // >
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img
    //         src={props.imageOne}
    //         className="d-block w-100 rounded placeholder-img"
    //         alt={props.alt}
    //       />
    //     </div>
    //     <div className="carousel-item">
    //       <img
    //         src={props.imageTwo}
    //         className="d-block w-100 rounded placeholder-img"
    //         alt={props.alt}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
