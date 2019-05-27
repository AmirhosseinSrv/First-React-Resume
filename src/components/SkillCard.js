import React, {Component} from 'react'
import data from "../Data";

import "./SkillCard.css"

class SkillCard extends Component {
    render() {
        return(
                <div className="Card-Wrapper">
                    {
                        Object.keys(data.sections[1].items).map(key => {
                            return(
                                <div className="Card">
                                    <div className="Icon-Wrapper">
                                        <i className={data.sections[1].items[key].content.icon}></i>
                                    </div>
                                    <div className="Skill-Title-Wrapper">
                                        <h4>{data.sections[1].items[key].content.title}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
        )
    }
}

export default SkillCard