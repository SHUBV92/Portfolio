import React from "react"
import Courage from "../pics/Courage.jpg"
// import Kaizoku from "../pics/Kaizoku.jpg"


import {
  Carousel
} from "react-bootstrap";

const Test =()=>{
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require(`../pics/Courage.jpg`)}
          // src="holder.js/800x400?text=First slide&bg=373940"
          alt="Twice slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>My Name is shubinder</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require(`../pics/Luffy.jpg`)}
          
          // src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>This is shubinders second slide</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Test
