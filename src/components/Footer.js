import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="row">
      <div className="col-8 col-md-10">
        <h2>Designed and developed by <strong>Grace Wu</strong>.</h2>{" "}
        <h2>
          Built with <strong>React</strong>. Hosted on Netlify.
        </h2>
      </div>
      <div className="col-4 col-md-2">
        <FontAwesomeIcon icon={faEnvelope} className="fa-xl socialIcons" />
        <FontAwesomeIcon icon={faLinkedin} className="fa-xl socialIcons" />
        <FontAwesomeIcon icon={faGithub} className="fa-xl socialIcons" />
      </div>
      </div>
    </div>
  );
}
