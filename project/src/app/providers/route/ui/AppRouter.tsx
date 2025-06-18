import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routerConfig/routerConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<p> Идет загрузка </p>}>
      <div className="page-wrapper">
        <Routes>
          {Object.values(routeConfig).map(({ element, path }) => (
            <Route key={path} path={path} element={element}></Route>
          ))}
        </Routes>
      </div>
    </Suspense>
  );
};

export default AppRouter;
