import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import getProducts from "../../hooks/getProducts";

function LikePage() {
  const [state, setState] = useState([]);
  const likedProductIds = useSelector((state) => state.user.likedProducts);

  useEffect(() => {
    getProducts({ filters: {} }, (data) => {
      setState(
        data.data.products.filter((el) => likedProductIds.includes(el._id))
      );
    });
  }, []);

  return (
    <div className="like-page" style={{ margin: "30px 0" }}>
      <Cards store={state} />
    </div>
  );
}

export default LikePage;
