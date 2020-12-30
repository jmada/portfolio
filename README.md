[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
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
    ·
    <a href="https://github.com/jmada/portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/jmada/portfolio/issues">Request Feature</a>
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
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
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
   <!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/jmada/portfolio/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

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
- [Devicon](hhttps://devicon.dev/)
- [flaticon](https://www.flaticon.com/)
- [EmailJS](https://www.emailjs.com/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [react-spring](https://www.react-spring.io/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/jmada/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/jmada/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jmada/repo.svg?style=for-the-badge
[forks-url]: https://github.com/jmada/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/jmada/repo.svg?style=for-the-badge
[stars-url]: https://github.com/jmada/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/jmada/repo.svg?style=for-the-badge
[issues-url]: https://github.com/jmada/repo/issues
[license-shield]: https://img.shields.io/github/license/jmada/repo.svg?style=for-the-badge
[license-url]: https://github.com/jmada/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jmada
[product-screenshot]: src/assets/images/projects/personal_website_home.png
