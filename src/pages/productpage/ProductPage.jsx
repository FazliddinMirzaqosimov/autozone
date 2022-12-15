import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import ProductImg from "../../components/ProductImage/ProductImg";
import { changeLastProduct } from "../../redux/user/UserAction";
import "./productpage.style.scss";
function ProductPage() {
  const { id } = useParams();
  const product = useSelector((state) => state.user.lastProduct);
  const relatedProducts = useSelector((state) =>
    state.product.products
      .filter((pr) => pr.category === product?.category && pr.id !== +id)
      .slice(0, 3)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (+id === product?.id) return;
    axios.get("https://fakestoreapi.com/products/" + id).then((res) => {
      dispatch(changeLastProduct(res.data));
    });
  }, [id]);

  return +id === product.id ? (
    <div className="product-page">
      <ProductImg product={product} />
      <h1>Related products. </h1>
      <Cards store={relatedProducts} length={40} />
    </div>
  ) : (
    <div></div>
  );
}

export default ProductPage;
