import React, { Component } from 'react';
import Alex from '../images/AlexG.jpg';
import './About.css'

class About extends Component {

    render() {
        return (
            <div className="about-container">
                <img className="alex" src={Alex} alt="AlexG" ></img>
                <h1>My Journey So Far</h1>
                <p className="aboutMe">My name is Alex Garcia and I am a software engineer. My experience in this field at this moment consists of my recent learning experience at General Assembly in Washington D.C. I am prior military, I was in the Marines in my younger years and gained a lot of knowledge and experience during that time. After that I became an automotive technician or mechanic for short. After almost 12 years of working as a mechanic I decided I wanted a career change and do something where I have the opportunity to grow and evolve.</p>
                <p className="aboutMe">I got interested in coding when a friend of mine was learning how to code with Python. I took a few courses and since I like building and fixing things this caught my attention. My friend then told me about General Assembly and after weighing my options I decided it was time to just take a leap of faith, so I applied to General Assembly’s Software Engineer Immersive program and started in November 12th, 2019. I learned multiple coding libraries and am still learning them. The vast amount of knowledge in this field is endless which gives me the chance to always improve and expand my skills.</p>
            </div>
        )
    }
}

export default About;