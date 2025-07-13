import {
  Action,
  combineReducers,
  Reducer,
} from "@reduxjs/toolkit";
import { ReducerManager, StateSchema, StateSchemaKey } from "./StateSchema";

export function createReducerManager(
  initialReducers: { [key in StateSchemaKey]?: Reducer }
): ReducerManager {
  const reducers: Record<string, Reducer<any, any>> = {
    ...initialReducers,
  };

  let combinedReducer = combineReducers(reducers);
  let keysToRemove: Array<StateSchemaKey> = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema | undefined, action: Action) => {
      if (keysToRemove.length > 0 && state) {
        state = { ...state };
        for (let key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) return;

      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) return;

      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
