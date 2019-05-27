import React, {Component} from 'react'
import { Element } from 'react-scroll'

import Fullpage from "../components/Fullpage"
import DownLink from "../components/DownLink"
import data from "../Data";
import {SocialIcon} from "react-social-icons";

import "./TitlesAndIconsSection.css"

class TitlesAndIconsSection extends Component {
    render() {
        return([
            <Element name="top" className="element">
            </Element>,
            <Fullpage className="First">
                <div>
                    <h1 className="Title">
                        {data.title}
                    </h1>
                </div>
                <div>
                    <h2>
                        {data.subtitle}
                    </h2>
                </div>
                <div>
                    {
                        Object.keys(data.links).map(key => {
                            return(
                                <SocialIcon className="SocialLinks" url={data.links[key]} />
                            )
                        })
                    }
                </div>
                <DownLink name="AboutMe"/>
            </Fullpage>
        ])
    }
}

export default TitlesAndIconsSection