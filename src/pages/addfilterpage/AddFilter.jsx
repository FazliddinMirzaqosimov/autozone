import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../../global";
import { fetchFilters } from "../../redux/products/Product.action";

function AddFilter({ page }) {
  const { id, name } = useParams();
  const [filter, setFilter] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!id) return;
    fetch(`${apiUrl}/api/v1/filter/${id}`)
      .then((res) => res.json())
      .then((data) => setFilter(data.data.filter));
  }, []);

  const handlePost = (e) => {
    const formData = new FormData(e.currentTarget);
    formData.append("filterName", name);
    axios({
      url: `${apiUrl}/api/v1/filters`,
      method: "POST",
      data: Object.fromEntries(formData.entries()),
    })
      .then((res) => {
        e.target.reset();
        setErrorMsg("");
        dispatch(fetchFilters());
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };
  const handlePatch = (e) => {
    const formData = new FormData(e.currentTarget);
    axios({
      url: `${apiUrl}/api/v1/filter/${id}`,
      method: "PATCH",
      data: Object.fromEntries(formData.entries()),
    })
      .then((res) => {
        navigate("/overview");
        dispatch(fetchFilters());
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };
  return (
    <main className="post-page">
      <form
        action=""
        onChange={(e) => {
          const formData = new FormData(e.currentTarget);
          setFilter({ ...filter, ...Object.fromEntries(formData.entries()) });
        }}
        onSubmit={(e) => {
          e.preventDefault();
          id ? handlePatch(e) : handlePost(e);
        }}
      >
        <input
          type="text"
          name="name"
          placeholder={name ? `Name of ${name}` : "Edit name"}
          value={filter.name}
          required
        />
        <p>{errorMsg}</p>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default AddFilter;
