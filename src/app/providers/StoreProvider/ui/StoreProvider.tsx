import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";
import { DeepPartial } from "utility-types";
import { ReducersMapObject } from "@reduxjs/toolkit";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncRedusers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, asyncRedusers } = props;

  const store = createReduxStore(
    initialState,
    asyncRedusers as ReducersMapObject<StateSchema>
  );

  return <Provider store={store}>{children}</Provider>;
};
