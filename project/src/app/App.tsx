import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import { Suspense } from "react";
import "./styles/index.scss";


import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import AboutPage from "pages/AboutPage/ui/AboutPage";
import MainPage from "pages/MainPage/ui/MainPage";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}> TOGGLE</button>
      <Link to={"/"}>Главная страница</Link>
      <Link to={"/about"}>о сайте</Link>

      <Suspense fallback={<p> Идет загрузка</p>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
