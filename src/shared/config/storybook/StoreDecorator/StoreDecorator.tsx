import { Decorator } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { StoryContext, StoryFn } from "@storybook/react";
import { DeepPartial } from "utility-types";

export const StoreDecorator =
  (state: DeepPartial<StateSchema>): Decorator =>
  (StoryComponent: StoryFn, context: StoryContext) =>
    (
      <StoreProvider initialState={state}>
        {StoryComponent(context.args, context)}
      </StoreProvider>
    );
