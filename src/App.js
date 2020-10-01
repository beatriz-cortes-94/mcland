import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Projects from "./components/Projects/projects";
import Services from "./components/Services/services";
import ProjectDetails from "./components/Projects/project-details";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/projects/:projectId" component={ProjectDetails} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
