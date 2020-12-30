[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/jmada/portfolio">
    <img src="src/assets/images/coding.png" alt="Coding" width="80" height="80">
  </a>

  <h3 align="center">Portfolio</h3>

  <p align="center">
    Juan Paredes's Portfolio
    <br />
    <a href="https://github.com/jmada/portfolio"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jmada/portfolio">View Demo</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

### Built With

- [ReactJS](https://reactjs.org/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
- To do the Contact Form functional you need an account in [EmailJS](https://dashboard.emailjs.com/sign-up) to get all the data for the ENV.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jmada/portfolio.git
   ```
2. Go to the repo root
   ```sh
   cd portfolio/
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Make a copy of .env.example then rename it to .env
   ```sh
   cp .env.example .env
   ```
5. Enter your Email, Github Profile, LinkedIn, Resume URL (GDrive) and your EmailJS data in .env
   ```sh
   REACT_APP_PERSONAL_EMAIL=
   REACT_APP_GITHUB_URL=
   REACT_APP_LINKEDIN_URL=
   REACT_APP_RESUME_URL=
   REACT_APP_EMAILJS_SERVICE_ID=
   REACT_APP_EMAILJS_TEMPLATE_ID=
   REACT_APP_EMAILJS_USER_ID=
   ```
6. Start NPM
   ```sh
   npm start
   ```

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Juan Paredes - [@disorderexe](https://twitter.com/disorderexe) - jmparedes@posteo.net

Project Link: [https://github.com/jmada/portfolio](https://github.com/jmada/portfolio)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [FontAwesome](https://fontawesome.com/)
- [Devicon](https://devicon.dev/)
- [flaticon](https://www.flaticon.com/)
- [EmailJS](https://www.emailjs.com/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [react-spring](https://www.react-spring.io/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/jmada/repo.svg?style=for-the-badge
[license-url]: https://github.com/jmada/portfolio/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jmdparedes/
[product-screenshot]: src/assets/images/projects/personal_website_home.png
