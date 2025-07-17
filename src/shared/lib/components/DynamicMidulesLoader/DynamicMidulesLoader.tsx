import { FC, ReactNode, useEffect } from "react";
import { useStore } from "react-redux";
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from "app/providers/StoreProvider/config/StateSchema";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Reducer } from "@reduxjs/toolkit";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};


interface DynamicMidulesLoaderProps {
  children?: ReactNode;

  reducers: ReducersList;
  removeAfterunmout?: boolean;
}
export const DynamicMidulesLoader: FC<DynamicMidulesLoaderProps> = (props) => {
  const dispatch = useAppDispatch();
  const { children, reducers, removeAfterunmout } = props;
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({ type: `@init ${name} reducer` });
    });

    return () => {
      if (removeAfterunmout) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey); // <--- исправлено
          dispatch({ type: `@destroy ${name} reducer` });
        });
      }
    };
  }, []);

  return <> {children}</>;
};
