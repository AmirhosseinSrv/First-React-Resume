import React, {Component} from 'react'
import { Link} from 'react-scroll'

import "./UpLink.css"

class DownLink extends Component {
    render() {
        return([
            <div className="UpLink">
                <Link activeClass="active" to={this.props.name} spy={true} smooth={true} offset={50} duration={500} delay={0}>
                    <img src={require("./UpArrow.png")} alt=""/>
                </Link>
            </div>
        ])
    }
}
export default DownLink