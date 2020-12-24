import React from "react";
import aisforartisanHomeImage from "../assets/images/a_is_for_artisan_home.png";
import rplogisticsHomeImage from "../assets/images/rplogistics_home.png";

export default function Project() {
  return (
    <div id="wrapper">
      <div id="main">
        <section id="three">
          <div className="container">
            <h3>My Latest Work</h3>
            <p>Some things I've built:</p>
            <div className="features">
              <article>
                <a
                  href="https://aisforartisan.org/"
                  className="image"
                  target="_blank"
                >
                  <img src={aisforartisanHomeImage} alt="" />
                </a>
                <div className="inner">
                  <h4>A is for Artisan</h4>
                  <p>
                    A is for Artisan is a non profit organization based in
                    Washington DC that works to celebrate and promote Latin
                    American craft.
                  </p>

                  <h5>Technologies I've used: </h5>
                  <ul>
                    <li>Semantic HTML5</li>
                    <li>CSS3</li>
                    <li>Bulma CSS Framework</li>
                    <li>WordPress</li>
                  </ul>
                  <p>
                    WordPress was requested by the client. He wanted the ability
                    to change, add and remove content on his site without the
                    need of a developer.
                  </p>
                </div>
              </article>
              <article>
                <a
                  href="https://rplogistics.com.py/"
                  className="image"
                  target="_blank"
                >
                  <img src={rplogisticsHomeImage} alt="" />
                </a>
                <div className="inner">
                  <h4>RPLogistics</h4>
                  <p>
                    RPLogistics is a company based in Paraguay that provices
                    logistics services. Also provices rent of forklift, cranes
                    and freight services.
                  </p>

                  <h5>Technologies I've used: </h5>
                  <ul>
                    <li>WordPress</li>
                  </ul>
                  <p>
                    WordPress were requested by the client. He wanted the
                    ability to change, add and remove content on his site
                    without the need of a developer.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
