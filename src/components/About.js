import React from 'react';
import { Fade } from 'react-reveal';
import me from '../res/me.jpeg';

export default class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="container">
                    <Fade bottom>
                        <h1>Hi, I'm Osama.</h1>
                    </Fade>
                    
                    <div className="about-flex">
                        <div className="about-details">
                            <Fade bottom>
                                <p>
                                    I am currently building this website and it should be ready very soon. You'll be able to see some of the cool things I've worked on and what I'm good at. I'm very excited for you to see it!
                                </p>
                            </Fade>
                            <br />
                            <div className="about-skills">
                                <div className="about-skills-column">
                                    <Fade bottom><h3>Languages</h3></Fade>
                                    <Fade bottom><p>Java</p></Fade>
                                    <Fade bottom><p>Python</p></Fade>
                                    <Fade bottom><p>C#</p></Fade>
                                    <Fade bottom><p>C</p></Fade>
                                    <Fade bottom><p>SQL</p></Fade>
                                    <Fade bottom><p>HTML</p></Fade>
                                    <Fade bottom><p>CSS</p></Fade>
                                    <Fade bottom><p>JavaScript</p></Fade>
                                    <Fade bottom><p>PHP</p></Fade>
                                </div>
                                <div className="about-skills-column">
                                    <Fade bottom><h3>Frameworks / Tools</h3></Fade>
                                    <Fade bottom><p>Android Development</p></Fade>
                                    <Fade bottom><p>React.js</p></Fade>
                                    <Fade bottom><p>Node.js</p></Fade>
                                    <Fade bottom><p>WPF</p></Fade>
                                    <Fade bottom><p>Git</p></Fade>
                                </div>
                            </div>
                        </div>
                        <Fade bottom>
                            <img src={me} className="about-image" alt="me" />
                        </Fade>
                    </div>
                </div>
            </div>
        );
    }
}