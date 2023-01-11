import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./showcase.style.scss";

function Showcase() {
  const isDark = true;
  const showProduct = useSelector((state) => {
    const x = Math.floor(state.product.products.length * Math.random());
    return state.product.products[x];
  });

  return (
    <div className="showcase">
      <h1>
        Аренда автомобиля с выкупом Ставрополе от <span> 530 ₽ в сутки</span>
      </h1>
      <p>Удобнее и выгоднее, чем копить на машину</p>
      <Link to="/overview">
        <button>Смотреть каталог авто</button>
      </Link>

      <div className="imgs">
        <div>
          <img src="./assets/media/машина 55 копия 1.png" alt="" />
          <div className="romb">
            <div></div>
          </div>
          <div className="romb">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
