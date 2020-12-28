import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/sass/main.scss";
import routes from "./routes/index";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Header />
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
