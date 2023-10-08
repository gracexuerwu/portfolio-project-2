import React from "react";

import videoSource from "../images/SchindlerProj/Final_IP3_prototype.mp4";

export default function VideoComponent() {
    <div>
    <h1>Video Example</h1>
    <video controls>
      <source src={videoSource} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
}