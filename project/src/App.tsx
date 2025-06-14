import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsynk } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsynk } from "./pages/MainPage/MainPage.async";
import { Suspense, useContext, useState } from "react";
import "./styles/index.scss";

import { useTheme } from "./theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}> TOGGLE</button>
      <Link to={"/"}>Главная страница</Link>
      <Link to={"/about"}>о сайте</Link>

      <Suspense fallback={<p> Идет загрузка</p>}>
        <Routes>
          <Route path="/" element={<MainPageAsynk />} />
          <Route path="/about" element={<AboutPageAsynk />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
