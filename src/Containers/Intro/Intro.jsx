import React from "react";

import {
  Container,
  Intro
} from "./Intro.styles.jsx";

import {
  ParallaxBanner,
} from "react-scroll-parallax";
import { Parallax, Background,  } from 'react-parallax';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faShoppingCart,
//   faFacebookF,
//   faMenorah
// } from "@fortawesome/free-solid-svg-icons";


const Introduction = () => {
  return (
    <Container>
      <Intro>
      {/* <Parallax
            blur={{ min: -50, max: 100 }}
            bgImage={require('../../pics/Luffy.jpg')}
            bgImageAlt="the dog"
            strength={-200}
        >
            Blur transition from min to max
            <div style={{ height: '900px' }} />
        </Parallax>*/}
        <h1>Shubinder Virk</h1> 
        <p>A Full stack engineer who loves writing code and making it human readable</p>
      </Intro>
    </Container>
  );
};

export default Introduction;
