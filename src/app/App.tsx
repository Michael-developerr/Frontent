import "./styles/index.scss";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/route";
import { NavBar } from "widgets/Navbar";
import { SideBar } from "widgets/sideBar";

import { Suspense, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";

const App = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<div>Loading translations...</div>}>
        <NavBar />
        <button onClick={() => setIsOpen(true)}>toggle</button>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          lorem-ipsum is a JavaScript module for generating passages of lorem
          ipsum text. Lorem ipsum text is commonly used as placeholder text in
          publishing, graphic design, and web development.
        </Modal>

        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
