import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowcaseProducts from "../../components/showcase-products/ShowcaseProducts";
import MiniShowcase from "../../components/showcase/MiniShowcase";
import Showcase from "../../components/showcase/Showcase";

function HomePage() {
  return (
    <div className="homepage">
      <Showcase />
      <MiniShowcase />
      <ShowcaseProducts />
    </div>
  );
}

export default HomePage;
