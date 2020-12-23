import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <section id="header">
      <header>
        <span class="image avatar">
          <img src="images/avatar.jpg" alt="" />
        </span>
        <h1 id="logo">
          <a href="#">Juan Paredes</a>
        </h1>
        <p>
          A Full Stack Developer
          <br />
          and a Passionate about Development
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
        <ul class="icons">
          <li>
            <a href="#" class="icon solid fa-envelope">
              <span class="label">Email</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon brands fa-github">
              <span class="label">Github</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon brands fa-linkedin">
              <span class="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon solid fa-download">
              <span class="label">Resume</span>
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}
