import "./index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsynk } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsynk } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";
const App = () => {
  return (
    <div className="app">
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
