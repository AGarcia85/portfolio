import React, { Component } from 'react';
import Alex from '../images/AlexG.jpg';
import './About.css'

class About extends Component {

    render() {
        return (
            <div className="about-container">
                <img className="alex" src={Alex} alt="AlexG" ></img>
                <h1>My Journey So Far</h1>
                <p className="aboutMe">Welcome and thank you for taking the time to look at my portfolio. My name is Alex Garcia and I am an up and coming software engineer. My experience in this field at this moment consists of my recent learning experience at General Assembly in Washington D.C. I won’t bore you with my life story so I will just give you the abridged version. I am prior military, I was in the Marines in my younger years and gained a lot of knowledge and experience during that time. After that I became an automotive technician or mechanic for short. After almost 12 years of working as a mechanic I decided I wanted a career change and do something where I have the opportunity to grow and evolve. Don’t get me wrong, I love working on cars, I still do but I felt that my potential is limited in that field. I got interested in coding when a friend of mine was learning how to code with Python. I took a few courses and since I like building and fixing things this caught my attention. After looking into how long it would take me to get a degree in computer science I got discouraged. My friend then told me about boot camp schools and guided me towards General Assembly. So after taking time to think about it and weighing my options I decided it was time to just take a leap of faith, so I applied to General Assembly’s Software Engineer Immersive course and started in November 12th, 2019. I learned multiple coding libraries and am still learning them. The vast amount of knowledge in this field is endless and gives me the chance to always improve and expand my skills which is something I always look forward to. I still struggle with coding and getting it just right but that’s just part of the experience. Right now I’m going over my old projects and revamping them to be user friendly. So if you want to see what I got after a few months of coding then I invite you to check out my projects and if you have any feedback good or bad I would gladly go over it and appreciate the help and advise. Thank you again and hope you enjoy what I have created so far.</p>
            </div>
        )
    }
}

export default About;