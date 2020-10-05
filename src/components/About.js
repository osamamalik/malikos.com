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
                                    I'm a software developer with a Bachelor of Science degree in Computer Science from York University.
                                    Prior to that, I obtained a 3 year advanced diploma in Software Development from Mohawk College. 
                                    I have experience in a variety of different technologies and tools through past employment, internships, and courses.
                                    As you might be able to tell, I've been interested in the field for a long time and am always striving to grow because
                                    there's so much to learn!
                                </p>  
                            </Fade> 
                            <Fade bottom>
                                <p>    
                                    I consider myself to be a generalist - I like to be involved in all sides of development, whether
                                    it be front-end or back-end. Clean designs and getting the details right are very important to me, and 
                                    that should be supported by clean, well-written code that can be easily scaled.
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