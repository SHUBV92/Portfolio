import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Skills from "./Containers/Skills/Skills";
import Introduction from "./Containers/Intro/Intro";
import Projects from "./Containers/Projects/Projects";
import NavToolBar from "./Containers/Navbar/Navbar.jsx";
import Test from "./Containers/Test.jsx";
import MyComponent from "./Containers/Paralaxax";
import ParallaxDesign from "./Containers/ParallaxDesign/ParallaxDesign";
import { ParallaxProvider } from "react-scroll-parallax";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavToolBar />
        <Switch>
          <ParallaxProvider>
            
            <Route path="/">
              <Introduction />
            </Route>
            
            <Route path="/skills">
              <Skills />
            </Route>
            
            <Route path="/projects">
              <Projects />
            </Route>
            
            <Route path="/">
              <Test />
            </Route>
            
            <Route path="/design">
              <MyComponent />
            </Route>
            
            <Route path="/">
              <ParallaxDesign />
            </Route>

          </ParallaxProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
