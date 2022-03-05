import React from "react";
import "../styles/Hero.css";

import Lottie from "lottie-react";
import arrow from "../animations/arrow.json";

//Phosphor icon import
import { MapPinLine } from "phosphor-react";

export default function Hero() {
  return (
    <div className="Hero">
      <h1>
        Hey I'm <span className="bold">Grace Wu</span>
      </h1>
      <h2>
        An <span className="bold">inquisitive multidisciplinary designer</span>{" "}
        based in   <MapPinLine size={50} /> Lucerne, Switzerland.
        <br /> Who enjoys writing code and moving pixels in the www.{" "}
      </h2>
      <br />
      <h4>What i do ↓</h4>
      {/* <div className="row">
        <div className="col-9"></div>
        <div className="col-3">
          <Lottie animationData={arrow} className="arrowAnimation" />
        </div>
      </div> */}
    </div>
  );
}