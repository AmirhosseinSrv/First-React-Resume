import React, { Component } from "react";
import "./Navbar.css"
import {Link} from "react-scroll/modules";

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <span><Link activeClass="active" to="top" spy={true} smooth={true} offset={50} duration={500} delay={0}>Titles and Social media</Link></span>
                <span><Link activeClass="active" to="AboutMe" spy={true} smooth={true} offset={50} duration={500} delay={0}>About Me</Link></span>
                <span><Link activeClass="active" to="Skills" spy={true} smooth={true} offset={50} duration={500} delay={0}>My Skills</Link></span>
            </div>

        );
    }
}

export default Navbar;