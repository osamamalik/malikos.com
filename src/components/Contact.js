import React from 'react';
import { Fade } from 'react-reveal';

export default class About extends React.Component {
    render() {
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
                        <a href="mailto:omalik91@gmail.com">
                            <div className="contact-email"></div>
                        </a>
                        <a href="https://linkedin.com/in/osamasmalik">
                            <div className="contact-linkedin"></div>
                        </a>
                        <a href="https://github.com/osamamalik">
                            <div className="contact-github"></div>
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