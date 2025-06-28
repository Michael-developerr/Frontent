import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
// import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/route";
import { NavBar } from "widgets/Navbar";
import { SideBar } from "widgets/sideBar";

import { Suspense } from "react";

const App = () => {
  // const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, )}>
      <Suspense fallback={<div>Loading translations...</div>}>
        <NavBar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
