import React from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import {
    Image
  } from "./ParallaxDesign.styles.jsx";

const ParallaxDesign = () => (
    <div>
        <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
            <Image src="../../pics/FireKaioku.png"/>
        </Parallax>
    </div>

)
export default ParallaxDesign; 