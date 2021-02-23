import React from "react";
import { Parallax } from "react-parallax";

const HomeParallax = () => {
  const image1 =
    "https://cdn.shopify.com/s/files/1/0265/0039/9213/files/about-banner2.jpg?v=1577971013";

  return (
    <Parallax
      className="parallax"
      bgStyle={{ backgroundPosition: "center" }}
      bgImage={image1}
      strength={200}
    >
      <div style={{ height: 600 }}></div>
    </Parallax>
  );
};

export default HomeParallax;
