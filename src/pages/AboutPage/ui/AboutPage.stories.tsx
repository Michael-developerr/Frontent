import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { ThemrDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import AboutPage from "./AboutPage";


const meta = {
  title: "pages/AboutPage",
  component: AboutPage,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkLoader: Story = {
  args: {},
};
DarkLoader.decorators = [ThemrDecorator(Theme.DARK)];

export const LigthLoader: Story = {
  args: {},
};
LigthLoader.decorators = [ThemrDecorator(Theme.LIGHT)];
