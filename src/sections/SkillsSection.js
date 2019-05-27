import React, {Component} from 'react'
import Fullpage from "../components/Fullpage"
import SkillCard from "../components/SkillCard"
import data from "../Data";
import "./SkillsSection.css"
import UpLink from "../components/UpLink";
import {Element} from "react-scroll/modules";

class SkillsSection extends Component {
    render() {
        return([
            <Element name="Skills" className="element">
            </Element>,
            <Fullpage className="Third" idName="Skills">
                <h2 className="Skill-Title">{data.sections[1].title}</h2>
                <br/>
                <SkillCard/>
                <UpLink name="top"/>
            </Fullpage>
        ])
    }
}

export default SkillsSection