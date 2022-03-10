import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="flex-container space-between">
        <div className="flex-item-left">
          <h2>
            Designed and developed by <strong>Grace Wu</strong>.
          </h2>{" "}
          <h2>
            Built with <strong>React</strong>. Hosted on Netlify.
          </h2>
        </div>
        <div className="flex-item-right footer-social">
          <ul>
            <li>
              <a
                href="mailto:grace.xuer.wu@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="fa-sm socialIcons"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/grace-ade-wu/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="fa-sm socialIcons"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/gracexuerwu"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="fa-sm socialIcons"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
