import React from 'react';
import ProjectModal from './ProjectModal';
import { Icon } from 'semantic-ui-react';
import forecast from '../res/forecast-square.png';
import mlpe from '../res/mlpe-square.png';
import mp from '../res/mp-square.png';
import mplePoster from '../res/Machine Learning for Printed Electronics.pdf';
import tee from '../res/tee-square.png';
import teePoster from '../res/TEE Poster.pdf';

export default class Projects extends React.Component {
    state = {
        projectForecastSelected: false,
        projectMPSelected: false,
        projectMLPESelected: false,
        projectTEESelected: false
    }

    handleCloseProjectForecast = () => {
        this.setState(() => ({ projectForecastSelected: false }));
    }
    handleOpenProjectForecast = () => {
        this.setState(() => ({ projectForecastSelected: true }));
    }

    handleCloseProjectMP = () => {
        this.setState(() => ({ projectMPSelected: false }));
    }
    handleOpenProjectMP = () => {
        this.setState(() => ({ projectMPSelected: true }));
    }

    handleCloseProjectMLPE = () => {
        this.setState(() => ({ projectMLPESelected: false }));
    }
    handleOpenProjectMLPE = () => {
        this.setState(() => ({ projectMLPESelected: true }));
    }
    
    handleCloseProjectTEE = () => {
        this.setState(() => ({ projectTEESelected: false }));
    }
    handleOpenProjectTEE = () => {
        this.setState(() => ({ projectTEESelected: true }));
    }

    render() {
        return (
            <div className="projects">
                <div className="container">
                    <h1>Some of My Projects</h1>
                        <div className='projects-flex'>

                            <div className="project-container">
                                <img src={forecast} className='project-image' alt="forecast-app" onClick={this.handleOpenProjectForecast} />
                                <div className='project-hover' onClick={this.handleOpenProjectForecast}>
                                    <div className='project-hover-content'>
                                        <div className='project-hover-top'></div>
                                        <div className='project-hover-name'><Icon name='magnify' size='large' /></div>
                                        <div className='project-hover-description'><p>A simple weather forecasting application.</p></div>
                                        <div className="project-tags">
                                            <p>Node.js</p>
                                            <p>HTML</p>
                                            <p>CSS</p>
                                        </div>
                                    </div>
                                </div>
                                <ProjectModal
                                    projectSelected={this.state.projectForecastSelected}
                                    handleCloseProject={this.handleCloseProjectForecast}
                                    title={'Forecast'}
                                    image={<img src={require('../res/forecast-preview.png')} alt="forecast" />}
                                    body={<p>Forecast is a weather application I made using Node.js. It was an exercise to get familiar with the workings of Node.js and different concepts within the platform such as custom modules, error handling, callback functions, and more. Forecast uses the Mapbox API to get the latitude and longitude of a specified location, and then uses the Weatherstack API to get that location's current weather data.</p>}
                                    button1={'LAUNCH'}
                                    button1Link={'https://malikos-weather-application.herokuapp.com/'}
                                    button2={'SOURCE'}
                                    button2Link={'https://github.com/osamamalik/WeatherForecastApp'}
                                />
                                
                            </div>

                            <div className="project-container">
                                <img src={mp} className='project-image' alt="m&p bookstore" onClick={this.handleOpenProjectMP} />
                                <div className='project-hover' onClick={this.handleOpenProjectMP}>
                                    <div className='project-hover-content'>
                                        <div className='project-hover-top'></div>
                                        <div className='project-hover-name'><Icon name='magnify' size='large' /></div>
                                        <div className='project-hover-description'><p>An online bookstore with multiple e-commerce components.</p></div>
                                        <div className="project-tags">
                                            <p>Java</p>
                                            <p>Servlets</p>
                                            <p>JSP</p>
                                            <p>SQL</p>
                                        </div>
                                    </div>
                                </div>
                                <ProjectModal
                                    projectSelected={this.state.projectMPSelected}
                                    handleCloseProject={this.handleCloseProjectMP}
                                    title={'Mom & Pop Bookstore'}
                                    image={<img src={require('../res/mp-preview.png')} alt="bookstore" />}
                                    body={
                                        <p>The Mom & Pop Bookstore was created using Java Servlets with a small team as part of the 'EECS 4413 - Building E-Commerce Systems' 
                                            course at York University. The project strictly followed the MVC design pattern and featured all basic
                                            functionalities of an online-store such as an extensive database of books that can be searched, filtered, and 
                                            sorted by several properties. Users can create accounts and have persistent, fully functioning shopping carts. They can add
                                            reviews for books and check out their carts by provuding credit card information (using SSL). View the source code
                                            on GitHub below for a full rundown of the all the features.
                                        </p>
                                    }
                                    button1={'SOURCE'}
                                    button1Link={'https://github.com/osamamalik/mom-pop'}
                                />
                            </div>

                            <div className="project-container">
                                <img src={tee} className='project-image' alt="Trans-Esophageal Echocardiography Simulator" onClick={this.handleOpenProjectTEE} />
                                <div className='project-hover' onClick={this.handleOpenProjectTEE}>
                                    <div className='project-hover-content'>
                                        <div className='project-hover-top'></div>
                                        <div className='project-hover-name'><Icon name='magnify' size='large' /></div>
                                        <div className='project-hover-description'><p>A training tool to simulate trans-esophageal echocardiograms.</p></div>
                                        <div className="project-tags">
                                            <p>C++</p>
                                            <p>Arduino</p>
                                            <p>VTK</p>
                                        </div>
                                    </div>
                                </div>
                                <ProjectModal
                                    projectSelected={this.state.projectTEESelected}
                                    handleCloseProject={this.handleCloseProjectTEE}
                                    title={'Trans-Esophageal Echocardiography Simulator'}
                                    image={<img src={require('../res/tee-preview.png')} alt="mlpe" />}
                                    body={
                                        <p> This was my final project as an undergraduate as part of the EECS 4080 - Computer Science Project course.
                                            Trans-esophageal echocardiography (TEE) is the standard of care for most cardiac surgeries and interventional cardiology procedures.
                                            It uses a thin and flexible ultrasound probe that is inserted down the esophagus in position beside the heart, and the echocardiographer
                                            adjusts the position and orientation of the probe from outside. For new clinicians, learning how to adjust the probe into the correct 
                                            location for various views of the heart can be quite challenging. The primary goal of this project was to develop an open source, 
                                            inexpensive simulator for training clinicians in the use of TEE ultrasound. A mouse sensor was connected to an Arduino microcontroller 
                                            to track the motion of a simulated ultrasound transducer. The Arduino communicated the mouse motion to an external computer. The goal was
                                            to use these readings to generate real-time CT and ultrasound images.
                                        </p>
                                    }
                                    button1={'POSTER'}
                                    button1Link={teePoster}
                                    button2={'SOURCE'}
                                    button2Link={'https://github.com/osamamalik/TEESimulator'}
                                />
                            </div>

                            <div className="project-container">
                                <img src={mlpe} className='project-image' alt="Machine Learning for Printed Electronics" onClick={this.handleOpenProjectMLPE} />
                                <div className='project-hover' onClick={this.handleOpenProjectMLPE}>
                                    <div className='project-hover-content'>
                                        <div className='project-hover-top'></div>
                                        <div className='project-hover-name'><Icon name='magnify' size='large' /></div>
                                        <div className='project-hover-description'><p>A research project to optimize printing fidelity.</p></div>
                                        <div className="project-tags">
                                            <p>Python</p>
                                            <p>Keras</p>
                                        </div>
                                    </div>
                                </div>
                                <ProjectModal
                                    projectSelected={this.state.projectMLPESelected}
                                    handleCloseProject={this.handleCloseProjectMLPE}
                                    title={'Machine Learning for Printed Electronics'}
                                    image={<img src={require('../res/mlpe-preview.png')} alt="mlpe" />}
                                    body={
                                        <p> I worked on this project as a research assistant at York University's Lassonde School of Engineering.
                                            The aim of was to develop a machine learning algorithm to optimize pattern fidelity in printed electronics. Printed electronics 
                                            enables the production of highly customizable, low-cost microelectronic devices. One of the challenges with them however, is that once printed,
                                            ink can flow and cause errors such as bulging in the desired shape. Using prior work to print simple shapes with minimal distortions, I worked
                                            on developing a convolutional neural network (CNN) in Python and Keras. The CNN was to take an image of an arbitrary circuit pattern (for which
                                            an optimal printing sequence was not known) as the input and then predict the printing sequence for the pattern.
                                        </p>
                                    }
                                    button1={'POSTER'}
                                    button1Link={mplePoster}
                                />
                            </div>

                        </div>
                </div>
            </div>
        );
    }
}