import { Decorator } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { StoryContext, StoryFn } from "@storybook/react";
import { DeepPartial } from "utility-types";
import { Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { loginReduser } from "features/AuthByUserName/model/slice/loginSlice";
import { LoginSchema } from "features/AuthByUserName";

const defaultReduser: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReduser as Reducer<LoginSchema | undefined>,
};

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncRedusers: DeepPartial<ReducersMapObject<StateSchema>> = {}
  ): Decorator =>
  (StoryComponent: StoryFn, context: StoryContext) =>
    (
      <StoreProvider
        initialState={state}
        asyncRedusers={{ ...defaultReduser, ...asyncRedusers }}
      >
        {StoryComponent(context.args, context)}
      </StoreProvider>
    );
