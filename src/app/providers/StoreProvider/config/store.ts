import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReduser } from "entities/Counter";
import { userReduser } from "entities/User";
import { loginReduser } from "features/AuthByUserName";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(initialState?: StateSchema) {
  const rootReduser: ReducersMapObject<StateSchema> = {
    counter: counterReduser,
    user: userReduser,
    loginForm: loginReduser,
  };

  const reducerManager = createReducerManager(rootReduser);

  const store = configureStore<StateSchema>({
    reducer: rootReduser,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
