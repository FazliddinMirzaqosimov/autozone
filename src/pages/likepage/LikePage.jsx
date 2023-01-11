import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";

function LikePage() {
  const state = useSelector((state) => state);
  const likedProductIds = state.user.likedProducts;

  return (
    <div className="like-page" style={{ margin: "30px 0" }}>
      <Cards
        store={state.product.products.filter((el) =>
          likedProductIds.includes(el._id)
        )}
      />
    </div>
  );
}

export default LikePage;
