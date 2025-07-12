import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReduser } from "entities/Counter";
import { userReduser } from "entities/User";
import { loginReduser } from "features/AuthByUserName";

export function createReduxStore(initialState?: StateSchema) {
  const rootReduser: ReducersMapObject<StateSchema> = {
    counter: counterReduser,
    user: userReduser,
    loginForm: loginReduser,
  };

  const store = configureStore<StateSchema>({
    reducer: rootReduser,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
