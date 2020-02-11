import React, { Component } from 'react';
import Alex from '../images/AlexG.jpg';
import './About.css'

class About extends Component {

    render() {
        return (
            <div className="about-container">
                <h1>About Me</h1>
                <img className="alex" src={Alex} alt="AlexG" ></img>
            </div>
        )
    }
}

export default About;