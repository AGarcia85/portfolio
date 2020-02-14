import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Linkedin from '../images/linkedin.png';
import Gmail from '../images/gmail.png';
import './Contact.css'

class Contact extends Component {

    openTab() {
        window.open("https://www.linkedin.com/in/alex-garcia85")
    }
    render() {
        return (
            <div className="contact-container">
                <h1>Contact Information</h1>
                <h2>Reach out and say hello</h2>
                <ul>
                    <li>afgarcia777@gmail.com</li>
                    <a href="mailto:afgarcia777@gmail.com"><img className="gmailIcon" src={Gmail} /></a>
                    <Link onClick={this.openTab}><img className="link" src={Linkedin}/></Link>
                </ul>
            </div>
        )
    }
}

export default Contact;