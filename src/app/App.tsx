import "./styles/index.scss";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/route";
import { NavBar } from "widgets/Navbar";
import { SideBar } from "widgets/sideBar";

import { Suspense, useEffect } from "react";

const App = () => {
  const { theme } = useTheme();

 

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<div>Loading translations...</div>}>
        <NavBar />
      </Suspense>
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
