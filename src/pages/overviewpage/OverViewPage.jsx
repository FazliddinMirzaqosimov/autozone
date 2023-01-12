import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import fetchProducts from "../../redux/products/Product.action";
// import fet
import "./overview.style.scss";

function OverViewPage({ isLoading }) {
  const store = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const [sortOption, setSortOption] = useState({
    title: "",
    option: "expensive",
    categories: {},
  });
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  // console.log(store);
  const sortedProducts = store
    .filter((el) => {
      return (
        el.name.toLowerCase().includes(sortOption.title.toLowerCase()) &&
        (sortOption.categories.car
          ? JSON.parse(el.car)._id === sortOption.categories.car
          : true) &&
        (sortOption.categories.category
          ? JSON.parse(el.category)._id === sortOption.categories.category
          : true) &&
        (sortOption.categories.country
          ? JSON.parse(el.country)._id === sortOption.categories.country
          : true)
      );
    })
    .sort((a, b) => {
      switch (sortOption.option) {
        case "rate":
          return b.rating - a.rating;

        case "expensive":
          return b.price - a.price;

        case "cheap":
          return a.price - b.price;

        case "newest":
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );

        case "oldest":
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );

        default:
          break;
      }
    });
  // console.log(sortedProducts);
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
