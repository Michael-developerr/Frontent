import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { ReduxStoreWithManager, StateSchema } from "./StateSchema";
import { counterReduser } from "entities/Counter";
import { userReduser } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { DeepPartial } from "utility-types";
import { ThunkExtraArg } from "./ThunkExtraArg";
import type { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import axios from "axios";

export function createReduxStore(
  initialState?: DeepPartial<StateSchema>,
  asyncRedusers?: Partial<ReducersMapObject<StateSchema>>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...(asyncRedusers as ReducersMapObject<StateSchema>),
    counter: counterReduser,
    user: userReduser,
  };

  const extraArg: ThunkExtraArg = {
    api: axios,
  };

  const store = configureStore({
    reducer: (state) => state as StateSchema,
    devTools: __IS_DEV__,
    preloadedState: initialState as StateSchema,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  }) as ReduxStoreWithManager;

  const reducerManager = createReducerManager(rootReducers, store);
  store.reducerManager = reducerManager;
  store.replaceReducer(reducerManager.reduce);

  return store;
}

export type AppDispatch = ThunkDispatch<StateSchema, ThunkExtraArg, AnyAction>;
