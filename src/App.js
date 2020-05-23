import React from 'react';
import logo from './logo.svg';
import './App.css';
import Skills from './Containers/Skills/Skills';
import Introduction from './Containers/Intro/Intro';
import Projects from './Containers/Projects/Projects';




function App() {
  return (
    <div className="App">
      <Introduction />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

