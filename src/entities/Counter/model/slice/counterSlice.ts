import { createSlice } from "@reduxjs/toolkit";
import { CounterSchema } from "../type/counterSchema";

const initialState: CounterSchema = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { actions: counterAction } = counterSlice;

export const { reducer: counterReduser } = counterSlice;
