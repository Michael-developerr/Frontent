import { EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUserName";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm: LoginSchema | undefined;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: Reducer<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore {
  reducerManager: ReducerManager;
}
