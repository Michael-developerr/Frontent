import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import { Suspense } from "react";
import "./styles/index.scss";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/route";
import { NavBar } from "widgets/Navbar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />

      <AppRouter />
    </div>
  );
};

export default App;
