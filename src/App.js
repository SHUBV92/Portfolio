import React from 'react';
import logo from './logo.svg';
import './App.css';
import Skills from './Containers/Skills/Skills';
import Introduction from './Containers/Intro/Intro';
import Projects from './Containers/Projects/Projects';
import NavToolBar from './Containers/Navbar/Navbar.jsx';
import Test from './Containers/Test.jsx';




function App() {
  return (
    <div className="App">
      <NavToolBar />
      <Introduction />
      <Skills />
      <Projects />
      <Test />
    </div>
  );
}

export default App;

