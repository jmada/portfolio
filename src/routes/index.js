import React from "react";

import AboutPage from "../pages/About";
import SkillPage from "../pages/Skill";
import ProjectPage from "../pages/Project";
import ContactPage from "../pages/Contact";

export default [
  {
    path: "/",
    exact: true,
    component: () => <AboutPage />,
    protected: null,
  },
  {
    path: "/skills",
    exact: true,
    component: () => <SkillPage />,
    protected: null,
  },
  {
    path: "/projects",
    exact: true,
    component: () => <ProjectPage />,
    protected: null,
  },
  {
    path: "/contact",
    exact: true,
    component: () => <ContactPage />,
    protected: null,
  },
];
