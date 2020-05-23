import React from "react";

import {
  Container,
  Intro
} from "./Intro.styles.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faFacebookF,
  faMenorah
} from "@fortawesome/free-solid-svg-icons";

const Introduction = () => {
  return (
    <Container>
      <Intro>
        <h1>Shubinder Virk</h1>
        <p>A Full stack engineer who loves writing code and making it human readable</p>
      </Intro>
    </Container>
  );
};

export default Introduction;
