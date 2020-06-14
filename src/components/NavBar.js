import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import logo from '../res/logo.svg';
import menu from '../res/menu.png';



//export default class NavBar extends React.Component {

export default function NavBar() {
    const [showItems, setShowItems] = React.useState(false);

    //render() {
        return (
            <div className="navbar" id="navbar">
                <div className="navbar-content">
                    <div className="navbar-header">
                        <img src={logo} className="navbar-logo" alt="logo" onClick={() => animateScroll.scrollTo()} />
                        <img src={menu} className="navbar-menu" alt="menu" onClick={() => setShowItems(!showItems)} />
                    </div>
                    <ul className={showItems ? 'navbar-items' : 'navbar-items-hide'}>
                        <li className="navbar-item">
                            <Link className="navbar-link" activeClass="active" to="about" spy={true} smooth={true} offset={-65} duration={500}>
                                About
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="navbar-link" activeClass="active" to="worked" spy={true} smooth={true} offset={-65} duration={500}>
                                Experience
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="navbar-link" activeClass="active" to="projects" spy={true} smooth={true} offset={-65} duration={500}>
                                Projects
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="navbar-link" activeClass="active" to="contact" spy={true} smooth={true} offset={-65} duration={500}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    //}
}