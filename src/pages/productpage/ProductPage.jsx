import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import ProductImg from "../../components/ProductImage/ProductImg";
import { apiUrl } from "../../global";
import getProducts from "../../hooks/getProducts";
import { changeLastProduct } from "../../redux/user/UserAction";
import "./productpage.style.scss";

function ProductPage() {
  const { id } = useParams();
  const product = useSelector((state) => state.user.lastProduct);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id === product?._id) return;
    axios.get(`${apiUrl}/api/v1/products/${id}`).then((res) => {
      const newProduct = res.data.data.product;
      dispatch(changeLastProduct(newProduct));

      console.log(newProduct);
      getProducts({ limit: 3, filters: { car: newProduct.car } }, (data) => {
        console.log(data);
        setRelatedProducts(data.data.products.filter((el) => el._id !== id));
      });
    });
  }, [id]);

  return id === product?._id ? (
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
