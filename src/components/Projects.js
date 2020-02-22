import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Project1 from '../images/mockweb.png';
import Shark from '../images/sharkModal.png';
import Simon from '../images/simon.png';
import Dogs from '../images/puppies.png';
import Front from '../images/breakingBad.png';
import Back from '../images/BB2.png';
import './Projects.css';

class Projects extends Component {

    openMock() {
        window.open("https://friendly-hoover-128fdc.netlify.com/")
    }

    openMock2() {
        window.open("")
    }

    openModal() {
        window.open("https://awesome-shaw-ee558c.netlify.com/")
    }

    openSimon() {
        window.open("https://dazzling-einstein-b74c7a.netlify.com/")
    }

    openDoggos() {
        window.open("https://elated-fermi-cd6f34.netlify.com/")
    }

    openBB1() {
        window.open("https://quizzical-euler-3a34a5.netlify.com/")
    }

    openBB2() {
        window.open("https://alexg-api-backend.herokuapp.com/")
    }

    render() {
        return (
            <div className="projects-container">
                <h1>My Projects</h1>
                <div className="project1">
                    <h4>My First Project</h4>
                    <Link onClick={this.openMock}>
                        <img className="projects" src={Project1}></img>
                    </Link>
                    {/* <h4>My First Project V.2</h4> */}
                    <img className="projects"></img>
                </div>
                <div className="project2" >
                    <h4>UI-Modal Project</h4>
                    <Link onClick={this.openModal}>
                        <img className="projects" src={Shark}></img>
                    </Link>
                </div>
                <div className="project3" >
                    <h4>Simon Game</h4>
                    <Link onClick={this.openSimon}>
                        <img className="projects" src={Simon}></img>
                    </Link>
                </div>
                <div className="project4" >
                    <h4>React UI-Modal Project</h4>
                    <Link onClick={this.openDoggos}>
                        <img className="projects" src={Dogs}></img>
                    </Link>
                </div>
                <div className="project5" >
                    <h4>Fullstack Project</h4>
                    <Link onClick={this.openBB1}>
                        <img className="projects" src={Front}></img>
                    </Link>
                    <Link onClick={this.openBB2}>
                        <img className="projects" src={Back}></img>
                    </Link>
                </div>
                <div className="soon">
                    <h3 className="soon" >Coming Soon</h3>
                    <h4>Boxing Bulldogs Website</h4>
                </div>

            </div>
        )
    }
}

export default Projects;