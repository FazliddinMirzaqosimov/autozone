import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import getProducts from "../../hooks/getProducts";
// import fet
import "./overview.style.scss";

function OverViewPage() {
  const [store, setStore] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState({
    name: "",
    sort: "-price",
    filters: {},
  });

  const setFetchingData = () => {
    getProducts(sortOption, (data) => {
      const products = data.data.products;
      setStore(products);
      setProducts(products);
    });
  };

  useEffect(setFetchingData, [sortOption.sort, sortOption.filters]);

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
      <p className="overview__categoryTitle">{products.length}</p>
      <Cards store={products} setFetchingData={setFetchingData} />
    </div>
  );
}

export default OverViewPage;
