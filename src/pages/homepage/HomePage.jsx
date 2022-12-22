import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
