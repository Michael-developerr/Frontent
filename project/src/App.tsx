import React from "react";
import { Counter } from "./components/Counter";
import "./index.scss";
import { Route, Routes } from "react-router-dom";
import AboutPge from "./pages/AboutPage/AboutPge";
import MainPage from "./pages/MainPage/MainPage";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div className="app">
      <Link to={"/"}>Главная страница</Link>
      <Link to={"/about"}>о сайте</Link>
      <Routes>
        <Route path="/about" element={<AboutPge />} />
      </Routes>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
