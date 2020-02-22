import React, { Component } from "react";
import './Resume.css';


class Resume extends Component {

    render() {
        return (
            <div className="resume">
                <h1 className="AlexG" >Alex Garcia</h1>
                <div className="underline"></div>
                <p className="underText" >Herndon, Va 20171 | (571) 420-9209 | afgarcia777@gmail.com</p>

                <div className="resumeBody">
                    <h4 className="points">STATEMENT</h4>
                        <p className="resumeText">I am an aspiring software engineer, who is determined to improve and evolve my skills, while being highly adaptable to any situation and environment with the patience to see the mission accomplished.</p>

                    <h4 className="points">SKILLS</h4>
                        <li className="skills">• HTML</li>
                        <li className="skills">• CSS</li>
                        <li className="skills">• Javascript</li>
                        <li className="skills">• Node.js</li>
                        <li className="skills">• React</li>
                        <li className="skills">• Python</li>
                        <li className="skills">• MongoDB</li>
                        <li className="skills">• Express</li>
                        <li className="skills">• SQL</li>
                        <li className="skills">• Django</li>

                    <h4 className="points">EXPERIENCE</h4>
                        <div className="holder">
                            <h5 className="job">Scholar | General Assembly</h5>
                            <h5 className="date">11/12/2019 - Present</h5>
                        </div>
                            <p className="resumeText">Learning how to create applications using different programming languages and frameworks while properly implementing that code without any errors or bugs and debugging any if present. Planning and developing to create multiple projects in different coding libraries while completing coding assignments. Work in an agile workflow environment to simulate real world experience to complete group projects.</p>

                        <div className="holder">
                            <h5>BMW and GM Technician for used car team | Koons Tysons</h5>
                            <h5 className="date">09/2016 - 10/2018</h5>
                        </div>
                            <p className="resumeText">Responsible for diagnosing and repairing all GM vehicles. Was put incharge of diagnosing and repairing all European and international manufacturers’ used cars/ trade-ins. Worked on as many as 200 vehicles per month all the while training new technicians in basic automotive maintenance.</p>

                        <div className="holder">
                            <h5 className="job">European Technician | Hemeon Enterprises inc.</h5>
                            <h5 className="date">02/2012 - 08/2012</h5>
                        </div> 
                            <p className="resumeText">Responsible for diagnosing and repairing all European vehicles and also helping the rest of the team with other work.                                                    Worked on multiple makes and models while maintaining a fast turn around time to ensure customer satisfaction.</p>

                        <div className="holder">
                            <h5 className="job">BMW Technician | BMW of Fairfax</h5>
                            <h5 className="date">02/2010 - 04/2011</h5>
                        </div>
                            <p className="resumeText">Responsible for diagnosing and repairing all aspects of the vehicle (bumper to bumper). Ensured customer vehicles were fixed and completed within the set time frame. Trained the company’s first female technician and ensured she surpassed the standards and qualifications to be BMW certified.</p>

                        <div className="holder">
                            <h5 className="job">Fast Line Technician | Toyota of Orlando</h5>
                            <h5 className="date">04/2008 - 09/2008</h5>
                        </div>
                            <p className="resumeText">Responsible for Lube Line, alignments, Tire mounts and balance. Focused on developing my skills to move up from lube line to line technician. </p>

                        <div className="holder">
                            <h5 className="job">Corporal | United States Marine Corps</h5>
                            <h5 className="date">08/2003 - 08/2007</h5>
                        </div> 
                            <p className="resumeText">Responsible for leading and training new Marines in urban combat while ensuring their safety to increase personnel and mission survival. Maintaining combat readiness and completing missions with quick and effective precision. Defending my country against all enemies, foreign and domestic.</p>

                        <h5 className="job">Awards</h5>
                            <li className="skills">• Navy and Marine Corps Achievement Medal w/ Combat Valor</li>
                            <li className="skills">• Navy Unit Commendation 2nd Award</li>
                            <li className="skills">• Combat Action Ribbon</li>
                            <li className="skills">• Marines Corps Good Conduct Medal </li>
                            <li className="skills">• Iraqi Campaign 2nd Award </li>
                            <li className="skills">• National Defense Medal</li>
                            <li className="skills">• Sea Service 2nd Award  </li>
                            <li className="skills">• Global War on Terrorism Expeditionary Medal </li>
                            <li className="skills">• Global War on Terrorism Service Medal </li>

                    <h4 className="points">EDUCATION</h4>
                        <div className="holder">
                            <h5 className="job">General Assembly | Washington D.C.</h5>
                            <h5 className="date">Graduation: February 18th, 2020</h5>
                        </div>
                            <p className="educate">Software Engineer Certification: Training included 12 weeks and 500 hours in multiple libraries of both front-end and back-end development. Worked on multiple projects both single and group oriented. </p>
                </div>
            </div>
        )
    }
}

export default Resume;