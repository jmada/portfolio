import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SocialIcon from "./SocialIcon";

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
          &nbsp; for the web.
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
        <SocialIcon />
      </footer>
    </section>
  );
}
