import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Linkedin from '../images/linkedin.png';
import Gmail from '../images/gmail.png';
import Github from '../images/GitHub.png'
import phone from '../images/phone.jpg'
import './Contact.css'

class Contact extends Component {

    openLink() {
        window.open("https://www.linkedin.com/in/alex-garcia85")
    }

    openGit() {
        window.open("https://github.com/AGarcia85")
    }

    render() {
        return (
            <div className="contact-container">
                <h1>Contact Information</h1>
                <h2>Reach out and say hello</h2>
                <div className="phoneContainer">
                    <img className="phone" src={phone} alt="phone"></img>
                    <a href="tel:571-420-9209" className="phoneNum" >571.420.9209</a>
                </div>
                    <h4>afgarcia777@gmail.com</h4>
                    <a href="mailto:afgarcia777@gmail.com"><img className="gmailIcon" src={Gmail} alt="gmail icon" /></a>    
                    <Link onClick={this.openLink}><img className="link" src={Linkedin} alt="linkedin icon"/></Link>
                    <Link onClick={this.openGit}><img className="git" src={Github} alt="github icon"></img></Link>               
            </div>
        )
    }
}

export default Contact;