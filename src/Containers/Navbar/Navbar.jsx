import React from "react";

import {
  Container,
  Nav
} from "./Nav.styles.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faFacebookF,
  faMenorah
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    let navRoutes = ["SUMMARY", "SKILLS", "PROJECTS", 'ARTICLES', "GET IN TOUCH"]
  return (
    <Container>
    <Nav>
        {navRoutes.map(x => {            
        return <h5>{x}</h5>
        })}

      </Nav>
    </Container>
  );
};

export default Navbar;
