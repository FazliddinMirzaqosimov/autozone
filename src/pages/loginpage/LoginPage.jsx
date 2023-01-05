import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeIsAdmin } from "../../redux/user/UserAction";
import { CHANGE_IS_ADMIN } from "../../redux/user/UserType";
import "./login.style.scss";

function LoginPage() {
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAdmin) navigate("/overview");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const admin = { name: "fitness1life", password: "autoadmin" };

    if (formData.name === admin.name && formData.password === admin.password) {
      dispatch(changeIsAdmin());
      localStorage.setItem("isAdmin", "qwoijdow90ie0we9rj");
      //    const navigate = useNavigate();
      navigate("/dashboard");
    }
  };
  return (
    <main className="login-form">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Imya:</label>
        <input type="text" name="name" placeholder="Введите imya" />
        <label htmlFor="password">Пароль:</label>
        <input
          name="password"
          type="password"
          placeholder="Введите свой пароль"
        />
        <button type="submit">Логин</button>
      </form>
    </main>
  );
}

export default LoginPage;
