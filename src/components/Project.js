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
                    Integer eu ante ornare amet commetus vestibulum blandit
                    integer in curae ac faucibus integer adipiscing ornare amet.
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
                    Integer eu ante ornare amet commetus vestibulum blandit
                    integer in curae ac faucibus integer adipiscing ornare amet.
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
