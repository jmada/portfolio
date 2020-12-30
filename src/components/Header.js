import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const {
  REACT_APP_PERSONAL_EMAIL,
  REACT_APP_GITHUB_URL,
  REACT_APP_LINKEDIN_URL,
  REACT_APP_RESUME_URL,
} = process.env;

export default function Header() {
  const [isWindowsSizeMediumOrLess, setIsWindowsSizeMediumOrLess] = useState(
    false
  );

  const updateIsWindowsSizeMediumOrLess = () => {
    setIsWindowsSizeMediumOrLess(window.innerWidth < 1025);
  };

  useEffect(() => {
    updateIsWindowsSizeMediumOrLess();

    window.addEventListener("resize", updateIsWindowsSizeMediumOrLess);
    return () => {
      window.removeEventListener("resize", updateIsWindowsSizeMediumOrLess);
    };
  }, []);

  const handleClick = () => {
    if (isWindowsSizeMediumOrLess) {
      document.body.classList.toggle("header-visible");
    }
  };

  return (
    <section id="header">
      <header>
        <h1 id="logo">
          <a href="/" rel="noopener noreferrer">
            Juan Paredes
          </a>
        </h1>
        <p>
          I build things
          <br />
          for the web.
        </p>
      </header>
      <nav id="nav">
        <ul onClick={handleClick}>
          <li>
            <NavLink to="/" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" exact activeClassName="active">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" exact activeClassName="active">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <footer>
        <ul className="icons">
          <li>
            <a
              href={`mailto:${REACT_APP_PERSONAL_EMAIL}`}
              className="icon"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="label">Email</span>
            </a>
          </li>
          <li>
            <a
              href={`${REACT_APP_GITHUB_URL}`}
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a
              href={`${REACT_APP_LINKEDIN_URL}`}
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href={`${REACT_APP_RESUME_URL}/export?format=pdf`}
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span className="label">Download Resume</span>
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}
