import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import "./App.scss";
import { apiUrl } from "./global";
import Footer from "./layouts/footer/Footer";
import Navigator from "./layouts/navigator/Navigator";
import AddCategory from "./pages/addfilterpage/AddFilter";
import HomePage from "./pages/homepage/HomePage";
import LikePage from "./pages/likepage/LikePage";
import LoginPage from "./pages/loginpage/LoginPage";
import OverViewPage from "./pages/overviewpage/OverViewPage";
import PostPage from "./pages/postupdatepage/PostPage";
import ProductPage from "./pages/productpage/ProductPage";
import fetchProducts, {
  fetchFilters,
  fetchProductFail,
  fetchProductRequest,
  fetchProductSucces,
} from "./redux/products/Product.action";
import ThemeContext from "./themeContext";

function App() {
  const store = useSelector((store) => store.product);
  const [isDark, setIsDark] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postProduct = (e, _, setErrorMsg) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch(fetchProductRequest());
    axios({
      url: apiUrl + "/api/v1/products",
      data: formData,
      method: "POST",
    })
      .then((res) => {
        dispatch(fetchProductFail());
        navigate("/overview");
      })
      .catch((err) => {
        dispatch(fetchProductFail());
        setErrorMsg(err);
      });
  };
  const updateProduct = (e, id, setErrorMsg) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    Object.fromEntries(formData.entries()).image.name ||
      formData.delete("image");

    dispatch(fetchProductRequest());
    axios({
      url: apiUrl + "/api/v1/products/" + id,
      data: formData,
      method: "PATCH",
    })
      .then(() => {
        dispatch(fetchProductFail());
        navigate("/product/" + id);
      })
      .catch((err) => {
        dispatch(fetchProductFail());
        setErrorMsg(err);
      });
  };

  useEffect(() => {
    dispatch(fetchFilters());
  }, []);

  useEffect(() => {
    document.documentElement.className = isDark ? "dark" : "";
  }, [isDark]);

  return (
    <ThemeContext.Provider value={isDark}>
      <div className="App">
        <div className={"loading " + (store.isLoading ? "active" : "")}>
          <div className="circle"></div>
          <img src="./assets/logos/logop.png" alt="" className="logo" />
        </div>
        <Navigator isDark={isDark} setIsDark={setIsDark} />
        <div className="App__pages">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add-filter/:name/" element={<AddCategory />} />
            <Route path="/update-filter/:id/" element={<AddCategory />} />
            <Route
              path="/post"
              element={<PostPage handleSubmit={postProduct} />}
            />{" "}
            <Route path="/likes" element={<LikePage />} />
            <Route
              path="/edit/:id"
              element={<PostPage handleSubmit={updateProduct} />}
            />
            <Route
              path="/overview"
              element={<OverViewPage isLoading={store.isLoading} />}
            />
            <Route path="product/:id" element={<ProductPage />} />
          </Routes>
        </div>
        <Footer isDark={isDark} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
