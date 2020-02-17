import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Linkedin from '../images/linkedin.png';
import Gmail from '../images/gmail.png';
import Github from '../images/GitHub.png'
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
                <ul>
                    <li>afgarcia777@gmail.com</li>
                    <a href="mailto:afgarcia777@gmail.com"><img className="gmailIcon" src={Gmail} /></a>
                    <Link onClick={this.openLink}><img className="link" src={Linkedin}/></Link>
                    <Link onClick={this.openGit}><img className="git" src={Github}></img></Link>
                </ul>
            </div>
        )
    }
}

export default Contact;