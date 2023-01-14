import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../global";
import useRestrict from "../../hooks/useAdminProtection";
import "./post.style.scss";

const PostPage = ({ handleSubmit }) => {
  useRestrict();
  const { id } = useParams();
  const [product, setProduct] = useState({ rating: 1 });
  const [errorMsg, setErrorMsg] = useState("");
  const filters = useSelector((state) => state.product.filters);

  useEffect(() => {
    if (!id) return;

    fetch(apiUrl + "/api/v1/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data.product);
      });
  }, [id]);
  return (
    <main className="post-page">
      <form
        action=""
        encType="multipart/form-data"
        onSubmit={(e) => {
          handleSubmit(e, id, setErrorMsg);
        }}
        onChange={(e) => {
          const formData = new FormData(e.currentTarget);
          setProduct(Object.fromEntries(formData));
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="name"
          value={product.name}
          required
        />

        <textarea
          name="description"
          placeholder="description"
          value={product.description}
        ></textarea>

        <input
          type="number"
          name="price"
          placeholder="price"
          value={product.price}
          required
        />

        <select name="category" required value={product.category}>
          {filters.map((el) =>
            el.filterName === "category" ? (
              <option value={el.name}>{el.name}</option>
            ) : (
              ""
            )
          )}
        </select>

        <select name="car" required id="" value={product.car}>
          {filters.map((el) =>
            el.filterName === "car" ? (
              <option value={el.name}>{el.name}</option>
            ) : (
              ""
            )
          )}
        </select>

        <select name="country" required id="" value={product.country}>
          {filters.map((el) =>
            el.filterName === "country" ? (
              <option value={el.name}>{el.name}</option>
            ) : (
              ""
            )
          )}
        </select>

        <input
          type="number"
          name="rating"
          placeholder="rating"
          value={product.rating}
        />
        <input
          type="number"
          name="shtrix"
          placeholder="shtrix"
          value={product.shtrix}
        />

        <input
          type="number"
          name="capacity"
          placeholder="capacity"
          value={product.capacity}
        />

        <input
          type="text"
          name="unity"
          placeholder="unity"
          value={product.unity}
        />

        <input type="file" name="image" />
        <p>{errorMsg.response?.data.message}</p>
        <button type="submit">submit</button>
      </form>
    </main>
  );
};

export default PostPage;
