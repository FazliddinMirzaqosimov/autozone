import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./layouts/footer/Footer";
import Navigator from "./layouts/navigator/Navigator";
import HomePage from "./pages/homepage/HomePage";
import OverViewPage from "./pages/overviewpage/OverViewPage";
import ProductPage from "./pages/productpage/ProductPage";
import fetchProducts from "./redux/products/Product.action";
import ThemeContext from "./themeContext";

function App() {
  const store = useSelector((store) => store.product);
  const [isDark, setIsDark] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const dispatch = useDispatch();

  useEffect(() => {
    store.products[0] || dispatch(fetchProducts());
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
