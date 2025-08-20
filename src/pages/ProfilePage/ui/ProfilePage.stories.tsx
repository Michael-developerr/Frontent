import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { ThemrDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import ProfilePage from "./ProfilePage";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkLoader: Story = {
  args: {},
};
DarkLoader.decorators = [ThemrDecorator(Theme.DARK),StoreDecorator({})];

export const LigthLoader: Story = {
  args: {},
};
LigthLoader.decorators = [ThemrDecorator(Theme.LIGHT),StoreDecorator({})];
