import React from "react";
import Tooltip from "./Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const {
  REACT_APP_PERSONAL_EMAIL,
  REACT_APP_GITHUB_URL,
  REACT_APP_LINKEDIN_URL,
  REACT_APP_RESUME_URL,
} = process.env;

export default function SocialIcon() {
  return (
    <ul className="icons">
      <li>
        <Tooltip tip="Email">
          <a
            href={`mailto:${REACT_APP_PERSONAL_EMAIL}`}
            className="icon"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="label">Email</span>
          </a>
        </Tooltip>
      </li>
      <li>
        <Tooltip tip="Github">
          <a
            href={`${REACT_APP_GITHUB_URL}`}
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span className="label">Github</span>
          </a>
        </Tooltip>
      </li>
      <li>
        <Tooltip tip="LinkedIn">
          <a
            href={`${REACT_APP_LINKEDIN_URL}`}
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="label">LinkedIn</span>
          </a>
        </Tooltip>
      </li>
      <li>
        <Tooltip tip="Resume">
          <a
            href={`${REACT_APP_RESUME_URL}/view`}
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDownload} />
            <span className="label">Download Resume</span>
          </a>
        </Tooltip>
      </li>
    </ul>
  );
}
