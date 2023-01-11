import React from "react";
import "./categories.style.scss";

function Categories({ sortOption, setSortOption }) {
  const handleClick = (e) => {
    const formData = Object.fromEntries(new FormData(e.currentTarget));

    setSortOption({ ...sortOption, categories: formData });
  };
  return (
    <form className="product-categories" onChange={handleClick}>
      <select name="category" required>
        <option value="">All (Categories)</option>
        <option value="accessuar">Aksessuari</option>
        <option value="akkumlyator">Akkumlyator</option>
        <option value="motor">Motor chast</option>
        <option value="filter">Filtr</option>
        <option value="xodovoy">Xodovoya chast</option>
        <option value="oil">Masel</option>
        <option value="jidkosti">Jidkosti</option>
        <option value="autoximiya">Avtoximiya</option>
        <option value="others">Others</option>
      </select>

      <select name="car" required id="">
        <option value="">All (Cars)</option>
        <option value="captiva">captiva</option>
        <option value="damas">damas</option>
        <option value="gentra">gentra</option>
        <option value="malibu">malibu</option>
        <option value="nexia">nexia</option>
        <option value="tico">tico</option>
        <option value="cobalt">cobalt</option>
        <option value="epica">epica</option>
        <option value="lacetty">lacetty</option>
        <option value="matiz">matiz</option>
        <option value="spark">spark</option>
        <option value="tracker">tracker</option>
        <option value="vaz">vaz</option>
        <option value="others">Others</option>
      </select>

      <select name="country" required id="">
        <option value="">All (Countries)</option>
        <option value="uzbekistan">Uzbekistan</option>
        <option value="usa">USA</option>
        <option value="russia">Russia</option>
        <option value="korea">Korea</option>
        <option value="turkey">Turkey</option>
        <option value="europe">Europe</option>
        <option value="china">China</option>
        <option value="others">Others</option>
      </select>
    </form>
  );
}

export default Categories;
