import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReduser } from "entities/Counter";
import { userReduser } from "entities/User";

export function createReduxStore(initialState?: StateSchema) {
const rootReduser: ReducersMapObject<StateSchema> = {
   counter: counterReduser,
   user:userReduser
}


  return configureStore<StateSchema>({
    reducer: rootReduser,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}


