import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../../global";
import { fetchFilters } from "../../redux/products/Product.action";
import "./delete.style.scss";

function DeletePage({ url }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, all } = useParams();
  const inputRef = useRef();

  const deleteFilter = () => {
    fetch(`${apiUrl}/api/v1/filter/${id}`, { method: "DELETE" }).then((res) => {
      dispatch(fetchFilters());
      navigate("/dashboard");
    });
  };
  const deleteAllProducts = () => {
    if (inputRef.current.value !== "autozone delete all") return;

    fetch(`${apiUrl}/api/v1/products`, { method: "DELETE" }).then((res) => {
      dispatch(fetchFilters());
      navigate("/dashboard");
    });
  };
  return (
    <div className="delete-page">
      {!all ? (
        <div className="delete-filter">
          <h1>You really wanna delete this?</h1>
          <p>You can't undo this action</p>
          <button onClick={deleteFilter} style={{ color: "black" }}>
            Delete
          </button>
        </div>
      ) : (
        <div className="reset-productss">
          <h1>You really wanna delete all of your products?</h1>
          <p>Please write "autozone delete all"</p>
          <input type="text" ref={inputRef} />
          <button onClick={deleteAllProducts} style={{ color: "black" }}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default DeletePage;
