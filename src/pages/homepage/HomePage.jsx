import React from "react";
import ShowcaseProducts from "../../components/showcase-products/ShowcaseProducts";
import Showcase from "../../components/showcase/Showcase";

function HomePage() {
  return (
    <div className="homepage">
      <Showcase />
      <ShowcaseProducts />
    </div>
  );
}

export default HomePage;
