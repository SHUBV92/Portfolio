import React from "react";
import {
  ParallaxBanner,
  Parallax
} from "react-scroll-parallax";
import { Image } from "./ParallaxDesign.styles.jsx";

const ParallaxDesign = () => (
  <div>
    <Parallax
      className="custom-class"
      y={[-20, 20]}
      tagOuter="figure"
    >
      <Image src="../../pics/FireKaioku.png" />
    </Parallax>

    <ParallaxBanner
      className="your-class"
      layers={[
        {
          image: "../../pics/FireKaioku.png",
          amount: 0.1
        },
        {
          image: "https://foo.com/bar.png",
          amount: 0.2
        }
      ]}
      style={{
        height: "500px"
      }}
    >
      <h1>Shubinders Profile</h1>
    </ParallaxBanner>
  </div>
);
export default ParallaxDesign;
