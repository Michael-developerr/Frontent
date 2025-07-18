import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userAction } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { ThunkExtraArg } from "app/providers/StoreProvider/config/ThunkExtraArg";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

interface LoginByUsername {
  username: string;
  password: string;
}

interface ThunkConfig {
  rejectValue: string;
  extra: ThunkExtraArg;
  state: StateSchema;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsername,
  ThunkConfig
>("login/loginByUsername", async (authData, thunkAPI) => {
  const { extra, rejectWithValue, dispatch } = thunkAPI;
  try {
    const response = await extra.api.post("http://localhost:8000/login", authData);

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    dispatch(userAction.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }  
});
