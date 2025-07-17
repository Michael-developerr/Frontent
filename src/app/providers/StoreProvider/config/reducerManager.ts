// store/config/reducerManager.ts
import { Reducer, AnyAction, ReducersMapObject, combineReducers } from "@reduxjs/toolkit";
import { StateSchema, StateSchemaKey, ReducerManager, ReduxStoreWithManager } from "./StateSchema";

export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>,
  store: ReduxStoreWithManager
): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);
  let keysToRemove: StateSchemaKey[] = [];

  const reduce = (state: StateSchema | undefined, action: AnyAction): StateSchema => {
    if (keysToRemove.length > 0 && state) {
      state = { ...state };
      for (const key of keysToRemove) {
        delete state[key];
      }
      keysToRemove = [];
    }

    return combinedReducer(state, action);
  };

  const updateReducer = () => {
    combinedReducer = combineReducers(reducers);
    store.replaceReducer(reduce); // <--- ключевая строка!
  };

  return {
    getReducerMap: () => reducers,

    reduce,

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) return;

      reducers[key] = reducer;
      updateReducer();
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) return;

      delete reducers[key];
      keysToRemove.push(key);
      updateReducer();
    },
  };
}
