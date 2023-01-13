import React, { useState } from "react";
import useDebouncer from "../../hooks/useDebouncer";
import "./search.style.scss";

function Search({ sortOption, setSortOption }) {
  const debouncer = useDebouncer();
  const handleChange = (e) => {
    debouncer(function () {
      setSortOption({
        ...sortOption,
        [e.target.name]: e.target.value,
      });
    }, 1000);
  };
  return (
    <div className="searchbar">
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Search..."
      />
      <select name="sort" onChange={handleChange}>
        <option value="-price">Most expensive</option>
        <option value="price">Most cheapest</option>
        <option value="-rating">Rating</option>
        <option value="-createdAt">Newest</option>
        <option value="createdAt">Oldest</option>
      </select>
    </div>
  );
}

export default Search;
