import React from 'react';
import ReactGA from 'react-ga';
import { Fade } from 'react-reveal';
import abelsoft from '../res/abelsoft.png';
import deloitte from '../res/deloitte.png';
import lassonde from '../res/lassonde.png';
import rbc from '../res/rbc.png';
import resumeicon from '../res/resume.png';
import resume from '../res/osama-malik-resume.pdf';

export default class Worked extends React.Component {
    render() {
        const ClickHandler = () => {
            ReactGA.event({
                category: 'Resume',
                action: 'Resume clicked'
            });
        };

        return (
            <div className="worked">
                <div className="container">
                    <Fade bottom><h1>Where I've Worked</h1></Fade>
                    <div className="worked-flex">
                        <div className="worked-employers">
                            <Fade bottom><a href="https://www2.deloitte.com/ca/en.html" alt="deloitte"><img src={deloitte} alt="Deloitte" /></a></Fade>
                            <Fade bottom><a href="https://lassonde.yorku.ca/" alt="lassonde"><img src={lassonde} alt="Lassonde" /></a></Fade>
                            <Fade bottom><a href="http://www.rbcroyalbank.com/" alt="rbc"><img src={rbc} alt="RBC" /></a></Fade>
                            <Fade bottom><a href="https://www.abelsoft.com/" alt="abelsoft"><img src={abelsoft} alt="ABELSoft" /></a></Fade>
                        </div>
                        <div className="worked-resume">
                            <Fade bottom><h2><a href={resume} target="_blank" rel="noopener noreferrer" onClick={ClickHandler}>View My Resume</a></h2></Fade>
                            <br />
                            <div className="resume-container">
                                <Fade bottom><a href={resume} target="_blank" rel="noopener noreferrer" onClick={ClickHandler}><img src={resumeicon} className="resume-icon" alt="resume" target="_blank" rel="noopener noreferrer" /></a></Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}