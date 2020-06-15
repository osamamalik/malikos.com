import React from 'react';
import logo from '../res/logo.svg';

export default class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome">
                <div className="welcome-blur">
                    <div className="welcome-container-top"></div>
                    <div className="welcome-logo-container">
                        <img src={logo} className="welcome-logo" alt="logo" />
                    </div>
                    <div className="welcome-container-bottom">
                        <h1 className="welcome-malikos">Osama Malik</h1>
                    </div>
                </div>
            </div>
        );
    }
}