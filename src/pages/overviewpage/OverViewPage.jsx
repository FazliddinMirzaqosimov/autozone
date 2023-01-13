import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { apiUrl } from "../../global";
import getProducts from "../../hooks/getProducts";
import fetchProducts from "../../redux/products/Product.action";
// import fet
import "./overview.style.scss";

function OverViewPage({ isLoading }) {
  const [store, setStore] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState({
    name: "",
    sort: "-price",
    filters: {},
  });

  useEffect(() => {
    getProducts(sortOption, (data) => {
      const products = data.data.products;
      setStore(products);
      setProducts(products);
    });
  }, [sortOption.sort, sortOption.filters]);

  useEffect(() => {
    const sortedProducts = store.filter((el) => {
      return el.name.toLowerCase().includes(sortOption.name.toLowerCase());
    });

    setProducts(sortedProducts);
  }, [sortOption.name]);
  return (
    <div className="overview">
      <Search sortOption={sortOption} setSortOption={setSortOption} />
      <div className="categories">
        <Categories sortOption={sortOption} setSortOption={setSortOption} />
      </div>
      <p className="overview__categoryTitle">
        {/* {sortOption.category.toLocaleUpperCase() || "ALL"}:{" "} */}
        {products.length}
      </p>
      <Cards store={products} />
    </div>
  );
}

export default OverViewPage;
