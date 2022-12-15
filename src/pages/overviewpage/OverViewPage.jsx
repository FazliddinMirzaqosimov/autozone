import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
// import fet
import "./overview.style.scss";

function OverViewPage({ isLoading }) {
  const store = useSelector((state) => state.product.products);
  const [sortOption, setSortOption] = useState({
    title: "",
    option: "expensive",
    category: "",
  });

  const sortedProducts = store
    .filter((el) => {
      return (
        el.title.toLowerCase().includes(sortOption.title.toLowerCase()) &&
        (sortOption.category ? el.category === sortOption.category : true)
      );
    })
    .sort((a, b) => {
      switch (sortOption.option) {
        case "rate":
          return b.rating.rate - a.rating.rate;

        case "expensive":
          return b.price - a.price;

        case "cheap":
          return a.price - b.price;

        case "watch":
          return b.rating.count - a.rating.count;

        default:
          break;
      }
    });

  return (
    <div className="overview">
      <Search sortOption={sortOption} setSortOption={setSortOption} />
      <div className="categories">
        <Categories sortOption={sortOption} setSortOption={setSortOption} />
      </div>
      <p className="overview__categoryTitle">
        {sortOption.category.toLocaleUpperCase() || "ALL"}:{" "}
        {sortedProducts.length}
      </p>
      <Cards store={sortedProducts} length={100} />
    </div>
  );
}

export default OverViewPage;
