import { lazy } from "react";

export const ProfilePageAsynk = lazy(
  () =>
    new Promise((resolve) => {
        //@ts-ignore - временный обход для динамического импорта
      setTimeout(() => resolve(import("./ProfilePage")), 1500);
    })
);
