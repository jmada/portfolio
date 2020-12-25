import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <section id="header">
      <header>
        <h1 id="logo">
          <a href="#">Juan Paredes</a>
        </h1>
        <p>
          I build things
          <br />
          for the web.
        </p>
      </header>
      <nav id="nav">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skill" exact activeClassName="active">
              Skill
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" exact activeClassName="active">
              Project
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
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="label">Email</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faGithub} />
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faLinkedin} />
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faDownload} />
              <span className="label">Download Resume</span>
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}
