import React from "react";

import {
  Container,
  Work
} from "./Projects.styles.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faFacebookF,
  faMenorah
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <Container>
      <Work>
        <ul>
          <li>
            <h1>Fragrance & Flickr</h1>
            <p>
              A Ecommerce website that sells
              boutique candles
            </p>
          </li>
        </ul>
      </Work>
    </Container>
  );
};

export default Projects;
