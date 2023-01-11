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
    categories: {},
  });
  console.log(store);
  const sortedProducts = store
    .filter((el) => {
      return (
        el.name.toLowerCase().includes(sortOption.title.toLowerCase()) &&
        (sortOption.categories.car
          ? el.car === sortOption.categories.car
          : true) &&
        (sortOption.categories.category
          ? el.category === sortOption.categories.category
          : true) &&
        (sortOption.categories.country
          ? el.country === sortOption.categories.country
          : true)
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

        case "newest":
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );

        case "oldest":
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );

        default:
          break;
      }
    });
  console.log(sortedProducts);
  return (
    <div className="overview">
      <Search sortOption={sortOption} setSortOption={setSortOption} />
      <div className="categories">
        <Categories sortOption={sortOption} setSortOption={setSortOption} />
      </div>
      <p className="overview__categoryTitle">
        {/* {sortOption.category.toLocaleUpperCase() || "ALL"}:{" "} */}
        {sortedProducts.length}
      </p>
      <Cards store={sortedProducts} />
    </div>
  );
}

export default OverViewPage;
