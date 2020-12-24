import React from "react";
import { NavLink } from "react-router-dom";

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
            <a href="#" className="icon solid fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-github">
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-linkedin">
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon solid fa-download">
              <span className="label">Resume</span>
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}
