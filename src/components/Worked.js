import React from 'react';
import abelsoft from '../res/abelsoft.png';
import deloitte from '../res/deloitte.png';
import lassonde from '../res/lassonde.png';
import rbc from '../res/rbc.png';
import resumeicon from '../res/resume.png';
import resume from '../res/osama-malik-resume.pdf';

export default class Worked extends React.Component {
    render() {
        return (
            <div className="worked">
                <div className="container">
                    <h1>Where I've Worked</h1>
                    <div className="worked-flex">
                        <div className="worked-employers">
                            <a href="https://www2.deloitte.com/ca/en.html" alt="deloitte"><img src={deloitte} alt="Deloitte" /></a>
                            <a href="https://lassonde.yorku.ca/" alt="lassonde"><img src={lassonde} alt="Lassonde" /></a>
                            <a href="http://www.rbcroyalbank.com/" alt="rbc"><img src={rbc} alt="RBC" /></a>
                            <a href="https://www.abelsoft.com/" alt="abelsoft"><img src={abelsoft} alt="ABELSoft" /></a>
                        </div>
                        <div className="worked-resume">
                            <h2>View My Resume</h2>
                            <br />
                            <div className="resume-container">
                                <a href={resume} target="_blank" rel="noopener noreferrer"><img src={resumeicon} className="resume-icon" alt="resume" target="_blank" rel="noopener noreferrer" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}