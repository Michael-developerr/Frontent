import { lazy } from "react";

export const AboutPageAsynk = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore - временный обход для динамического импорта
      setTimeout(() => resolve(import("./AboutPage")), 1500);
    })
);
