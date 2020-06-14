import React from 'react';
import { Progress } from 'semantic-ui-react';
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
                            
                        </div>
                        <Fade bottom>
                            <img src={me} className="about-image" alt="me" />
                        </Fade>
                    </div> 
                    <div className="about-skills">
                        <div className="about-skills-column">
                            <Fade bottom>
                                <div className="about-skills-bar">
                                    <p>Java</p>
                                    <Progress className="about-skills-bar-progress" percent={90} color={'purple'} />
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className="about-skills-bar">
                                    <p>Python</p>
                                    <Progress className="about-skills-bar-progress" percent={75} color={'purple'} />
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className="about-skills-bar">
                                    <p>C</p>
                                    <Progress className="about-skills-bar-progress" percent={60} color={'purple'} />
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className="about-skills-bar">
                                    <p>C#</p>
                                    <Progress className="about-skills-bar-progress" percent={80} color={'purple'} />
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className="about-skills-bar">
                                    <p>Android</p>
                                    <Progress className="about-skills-bar-progress" percent={75} color={'purple'} />
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className="about-skills-bar">
                                    <p>SQL</p>
                                    <Progress className="about-skills-bar-progress" percent={80} color={'purple'} />
                                </div>
                            </Fade>
                        </div>
                        <div className="about-skills-column">
                            <Fade bottom>
                                <div className="about-skills-bar">
                                    <p>HTML, CSS</p>
                                    <Progress className="about-skills-bar-progress" percent={85} color={'purple'} />
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className="about-skills-bar">
                                    <p>PHP</p>
                                    <Progress className="about-skills-bar-progress" percent={25} color={'purple'} />
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className="about-skills-bar">
                                    <p>JavaScript</p>
                                    <Progress className="about-skills-bar-progress" percent={75} color={'purple'} />
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className="about-skills-bar">
                                    <p>Node.js</p>
                                    <Progress className="about-skills-bar-progress" percent={50} color={'purple'} />
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className="about-skills-bar">
                                    <p>React</p>
                                    <Progress className="about-skills-bar-progress" percent={60} color={'purple'} />
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className="about-skills-bar">
                                    <p>Git</p>
                                    <Progress className="about-skills-bar-progress" percent={60} color={'purple'} />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}