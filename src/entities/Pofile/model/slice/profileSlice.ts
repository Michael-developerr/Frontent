import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { ProfileSchema } from "../types/profile";

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

export const { actions: profileAction } = profileSlice;

export const { reducer: profileReduser } = profileSlice;
