import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import  Home from "./components/Home";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <nav className="nav-bar">
          <Link to="/"><h3>Home</h3></Link>
          <Link to="about"><h3>About Me</h3></Link>
          <Link to="projects"><h3>Projects</h3></Link>
          <Link to="contact"><h3>Contact</h3></Link>
        </nav>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </main>
    
      </div>
    );
  }
  
}

export default App;
