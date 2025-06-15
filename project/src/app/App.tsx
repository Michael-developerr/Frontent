import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import { Suspense } from "react";
import "./styles/index.scss";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/route";
import { NavBar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>

      <NavBar/>
      <button onClick={toggleTheme}> TOGGLE</button>
      <Link to={"/"}>Главная страница</Link>
      <Link to={"/about"}>о сайте</Link>

      <AppRouter />
    </div>
  );
};

export default App;
