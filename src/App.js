import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar.js';
import {Home} from './contents/Home.js';
import {About} from './contents/About.js';
import {Projects} from './contents/Projects.js';
import {Skills} from './contents/Skills.js';
import {Contact} from './contents/Contact.js';
import {Resume} from './contents/Resume.js';
import Mystery from './contents/Mystery';
import Construction from './components/Construction';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Construction />
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/mystery">
            <Mystery />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
