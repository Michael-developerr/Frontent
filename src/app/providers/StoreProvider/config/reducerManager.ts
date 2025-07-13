import {
  Action,
  Reducer,
  ReducersMapObject,
  combineReducers,
} from "@reduxjs/toolkit";
import { ReducerManager, StateSchema, StateSchemaKey } from "./StateSchema";

export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
  let reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove: StateSchemaKey[] = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema | undefined, action: Action): StateSchema => {
      if (keysToRemove.length > 0 && state) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state as any, action) as StateSchema;
    },

    add: (key: StateSchemaKey, reducer: Reducer): void => {
      if (!key || reducers[key]) return;

      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StateSchemaKey): void => {
      if (!key || !reducers[key]) return;

      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
