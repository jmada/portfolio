import React from "react";
import image from "../assets/images/banner.jpeg";

export default function About() {
  return (
    <div id="wrapper">
      <div id="main">
        <section id="one">
          <div className="image main" data-position="center">
            <img src={image} alt="Sky Full of Stars" />
          </div>
          <div className="container">
            <header className="major">
              <h2>Hello there!</h2>
              <p>
                My name is Juan Paredes and
                <br />
                I'm a Full Stack Developer.
              </p>
            </header>
            <p>
              I like working on Web Development Projects, I have 4 years
              experience working as Web Developer, creating landing pages,
              administration systems (web based), API REST, e-Commerce and other
              projects that involves Web Development. For fun I love traveling,
              reading and working on amazing projects.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
