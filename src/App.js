import React from 'react';
import logo from './logo.svg';
import './App.css';
import Skills from './Containers/Skills/Skills';
import Introduction from './Containers/Intro/Intro';
import Projects from './Containers/Projects/Projects';
import NavToolBar from './Containers/Navbar/Navbar.jsx';
import Test from './Containers/Test.jsx';
import MyComponent from './Containers/Paralaxax';
import ParallaxDesign from './Containers/ParallaxDesign/ParallaxDesign';
import { ParallaxProvider } from 'react-scroll-parallax';




function App() {
  return (
    <div className="App">
      <ParallaxProvider>
      <NavToolBar />
      <Introduction />
      <Skills />
      <Projects />
      <Test />
      <MyComponent />
      <ParallaxDesign />
    </ParallaxProvider>
    </div>
  );
}

export default App;

