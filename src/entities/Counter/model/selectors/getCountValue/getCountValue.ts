import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCount/getCounter";
import { CounterSchema } from "../../type/counterSchema";

export const getCountValue = createSelector(
  getCounter,
  (counter: CounterSchema | undefined) => counter?.value ?? 0
);
