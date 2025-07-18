import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userAction } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

interface LoginByUsername {
  username: string;
  password: string;
}
//  createAsyncThunk (1 арг что возвращаем, аргумент)
export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsername,
  { rejectValue: string }
>("login/loginByUsername", async (authData, thunkAPI) => {
  try {
    const response = await axios.post("http://localhost:8000/login", authData);

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userAction.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('error');
  }
});
