import { lazy } from "react";

export const MainPageAsynk = lazy(
  () =>
    new Promise((resolve) => {
        //@ts-ignore - временный обход для динамического импорта
      setTimeout(() => resolve(import("./MainPage")), 1500);
    })
);
