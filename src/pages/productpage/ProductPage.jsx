import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import ProductImg from "../../components/ProductImage/ProductImg";
import { apiUrl } from "../../global";
import { changeLastProduct } from "../../redux/user/UserAction";
import "./productpage.style.scss";

function ProductPage() {
  const { id } = useParams();
  const product = useSelector((state) => state.user.lastProduct);
  const relatedProducts = useSelector((state) =>
    state.product.products
      .filter(
        (pr) =>
          (pr.category === product?.category || pr.car === product.car) &&
          pr._id !== id
      )
      .slice(0, 3)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(apiUrl);
    if (id === product?._id) return;
    axios.get(`${apiUrl}/api/v1/products/${id}`).then((res) => {
      dispatch(changeLastProduct(res.data.data.product));
    });
  }, [id]);
  console.log(product);
  return id === product._id ? (
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
