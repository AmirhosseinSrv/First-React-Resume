import React, {Component} from 'react'
import Fullpage from "../components/Fullpage"
import data from "../Data";
import "./AboutMeSection.css"
import DownLink from "../components/DownLink"
import {Element} from "react-scroll/modules";

class AboutMeSection extends Component {
    render() {
        return([
            <Element name="AboutMe" className="element">
            </Element>,
            <Fullpage className="Second">
                <h1>{data.sections[0].title}</h1>
                <div className="About-Me">
                    {data.sections[0].items.map(p => {
                        return <p>{p.content}</p>
                    })}
                </div>
                <DownLink name="Skills"/>
            </Fullpage>
        ])
    }
}

export default AboutMeSection