
import { Counter } from "entities/Counter";
import React from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("main");
  console.log("MainPage loaded");
  return (
    <div>
      {/* <BugButton /> */}
      <Counter/>
      {t("Главная страница")}
    </div>
  );
};

export default MainPage;
