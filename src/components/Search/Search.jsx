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
        name="title"
        onChange={handleChange}
        placeholder="Search..."
      />
      <select name="option" onChange={handleChange}>
        <option value="expensive">Most expensive</option>
        <option value="cheap">Most cheapest</option>
        <option value="rate">Rating</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
}

export default Search;
