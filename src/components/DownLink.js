import React, {Component} from 'react'
import { Link, Element } from 'react-scroll'

import "./DownLink.css"

class DownLink extends Component {
    render() {
        return([
            <div className="DownLink">
                <Link activeClass="active" to={this.props.name} spy={true} smooth={true} offset={50} duration={500} delay={0}>
                        <img src={require("./DownArrow.png")} alt=""/>
                </Link>
            </div>,
            <Element name={this.props.name} className="element">
            </Element>
        ])
    }
}
export default DownLink