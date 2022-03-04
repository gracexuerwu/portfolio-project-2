import React from "react";
import "../styles/Hero.css";

import Lottie from "lottie-react";
import arrow from "../animations/arrow.json";

export default function Hero() {
  return (
    <div className="Hero">
      <h3>Hey I'm</h3>
      <h1>Grace Wu</h1>
      <h2>
        An <span>inquisitive multidisciplinary designer</span> &amp; Design Management student based in Lucerne, Switzerland. 
        <br /> Who enjoys writing code and moving
        pixels in the www.{" "}
      </h2>
      <br />
      <div className="row">
        <div className="col-9">
          <h4>Scroll down to view my works</h4>
        </div>
        <div className="col-3">
          <Lottie animationData={arrow} className="arrowAnimation" />
        </div>
      </div>
    </div>
  );
}
