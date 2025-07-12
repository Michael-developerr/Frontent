import { lazy, FC } from "react";
import { LoginFormProps } from "./LoginForm";

export const LoginFormAsynk = lazy<FC<LoginFormProps>>(
  () =>
    new Promise((resolve) => {
      //@ts-ignore - временный обход для динамического импорта
      setTimeout(() => resolve(import("./LoginForm")), 1500);
    })
);
