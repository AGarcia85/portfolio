import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import  Home from "./components/Home";
import Resume from "./components/Resume"
import Blue from "./images/bluelines.jpg"
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <nav className="nav-bar">
          <Link to="/"><h3>Home</h3></Link>
          <Link to="about"><h3>About Me</h3></Link>
          <Link to="projects"><h3>Projects</h3></Link>
          <Link to="resume"><h3>Résumé</h3></Link>
          <Link to="contact"><h3>Contact</h3></Link>
        </nav>
        <main>
          <Route path="/" exact component={Home}>
            <img className="home" src={Blue} alt="moon"></img>
          </Route>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </main>
    
      </div>
    );
  }
  
}

export default App;
