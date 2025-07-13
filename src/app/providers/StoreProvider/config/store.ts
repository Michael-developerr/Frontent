import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReduser } from "entities/Counter";
import { userReduser } from "entities/User";

import { createReducerManager } from "./reducerManager";
import { DeepPartial } from "utility-types";

const wrapReducer = <S, A>(reducer: (state: S, action: A) => S) => {
  return (state: S | undefined, action: A) => reducer(state as S, action);
};

export function createReduxStore(initialState?: DeepPartial<StateSchema>) {
  const rootReduser: ReducersMapObject<StateSchema> = {
    counter: wrapReducer(counterReduser),
    user: wrapReducer(userReduser),
  
  };

  const reducerManager = createReducerManager(rootReduser);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState as StateSchema,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
