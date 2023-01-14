import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../../global";
import { fetchFilters } from "../../redux/products/Product.action";

function DeletePage({ url }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleClick = () => {
    fetch(`${apiUrl}/api/v1/filter/${id}`, { method: "DELETE" }).then((res) => {
      dispatch(fetchFilters());
      navigate("/dashboard");
    });
  };
  return (
    <div className="delete-page">
      <h1>You really wanna delete this?</h1>
      <p>You can't undo this action</p>
      <button onClick={handleClick} style={{ color: "black" }}>
        Delete
      </button>
    </div>
  );
}

export default DeletePage;
