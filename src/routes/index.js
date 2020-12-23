import React from "react";

import About from "../components/About";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Contact from "../components/Contact";

export default [
  {
    path: "/",
    exact: true,
    component: () => <About />,
    protected: null,
  },
  {
    path: "/skill",
    exact: true,
    component: () => <Skill />,
    protected: null,
  },
  {
    path: "/project",
    exact: true,
    component: () => <Project />,
    protected: null,
  },
  {
    path: "/contact",
    exact: true,
    component: () => <Contact />,
    protected: null,
  },
];
