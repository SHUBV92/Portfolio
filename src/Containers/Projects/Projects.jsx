import React from "react";

import {
  Container,
  Work
} from "./Projects.styles.jsx";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faShoppingCart,
//   faFacebookF,
//   faMenorah
// } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <Container>
      <Work>
        <ul>
          <li>
            <h1>Fragrance & Flickr</h1>
            <p>
              An e-commerce website that allows
              users to purchase candles through a
              Stripe payment API. A fully
              authenticated registration/login
              journey that enables you to have a
              customised user experience from the
              home page to the shopping cart.
              Integration of a Content Management
              System using Strapi to provide
              control and flexibility of the
              content to the site owner.
              <h3>
                Tech: React, JavaScript, Node.js,
                Express, Firebase, Stripe, Strapi,
                React-router, Styled-Components
                and Bootstrap{" "}
              </h3>
              <a href="https://github.com/SHUBV92/Flicker">
                Fragrance & Flickr
              </a>
            </p>
          </li>
          <li>
            <h1>Corona Run Game</h1>
            <p>
              An entertaining 2d Mario-styled game
              developed during a 2-day Makers’
              Hackathon - Hack for Heroes.
            </p>
            <a href="https://github.com/SHUBV92/hfh_corona_game">
              Fragrance & Flickr
            </a>
          </li>
        </ul>
      </Work>
    </Container>
  );
};

export default Projects;
