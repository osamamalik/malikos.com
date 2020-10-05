import React from 'react';
import ReactGA from 'react-ga';
import { Fade } from 'react-reveal';

export default class About extends React.Component {
    render() {
        const EmailClickHandler = () => {
            ReactGA.event({
                category: 'Contact',
                action: 'Email'
            });
        };

        const LinkedInClickHandler = () => {
            ReactGA.event({
                category: 'Contact',
                action: 'LinkedIn'
            });
        };

        const GitHubClickHandler = () => {
            ReactGA.event({
                category: 'Contact',
                action: 'GitHub'
            });
        };

        return (
            <div className="contact">
                <div className="container">
                    <Fade bottom><h1>Let's Get In Touch.</h1></Fade>

                    <div className="contact-message">
                        <Fade bottom>
                            <p> 
                                Please feel free to leave me an email. Whether you'd like to discuss 
                                any of my past work, talk about future opportunities, ask any questions, 
                                or just say hello, my inbox is always open!
                            </p>
                        </Fade>
                    </div>

                    <div className="contact-social">
                        <a href="mailto:omalik91@gmail.com" target="_blank" rel="noopener noreferrer" onClick={EmailClickHandler}>
                            <Fade bottom><div className="contact-email"></div></Fade>
                        </a>
                        <a href="https://linkedin.com/in/osamasmalik" target="_blank" rel="noopener noreferrer" onClick={LinkedInClickHandler}>
                            <Fade bottom><div className="contact-linkedin"></div></Fade>
                        </a>
                        <a href="https://github.com/osamamalik" target="_blank" rel="noopener noreferrer" onClick={GitHubClickHandler}>
                            <Fade bottom><div className="contact-github"></div></Fade>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

// <form class="contact-form" id="contact-form" onSubmit={this.handleSubmit}>
//                         <div class="contact-form-inner">
//                             <Fade bottom><input className="contact-form-name" type="text" placeholder="Name" /></Fade>
//                             <Fade bottom><input className="contact-form-email" type="email" placeholder="Email" /></Fade>
//                             <Fade bottom><textarea className="contact-form-message" rows="5" placeholder="Your Message"></textarea></Fade>
//                             <Fade bottom><button className="contact-send link">Send</button></Fade>
//                         </div>
//                     </form>