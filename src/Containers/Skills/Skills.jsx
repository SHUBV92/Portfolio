import React from "react"

import {Container, Frontend, Backend, OtherSkills} from "./Skills.styles.jsx"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Skills =()=>{

    return (
        <Container>
                <h1>Skills</h1>
                <Frontend>
                    <ul>
                        <li>Node.js</li>
                        <FontAwesomeIcon icon={faShoppingCart}/>
                        <li>React</li>

                        <li>HTML5</li>
                        <FontAwesomeIcon icon={faShoppingCart}/>
                        <li>CSS</li>
                    </ul>
                </Frontend>
                <Backend>
                        <ul>
                            <li>Node</li>
                            <li>Python</li>
                        </ul>
                </Backend>
                <OtherSkills>
                    <ul>
                        <li>Git</li>
                        <li>Firebase</li>
                        <li>Heroku</li>
                        <li>npm</li>
                        


                    </ul>
                </OtherSkills>

                </Container>
    )

}

export default Skills