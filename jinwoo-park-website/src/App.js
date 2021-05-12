import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar.js';
import {Home} from './contents/Home.js';
import {About} from './contents/About.js';
import {Projects} from './contents/Projects.js';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
