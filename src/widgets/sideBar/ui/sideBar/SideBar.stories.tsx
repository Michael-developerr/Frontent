import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { SideBar } from "./SideBar";
import { ThemrDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "widgets/SideBar",

  component: SideBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ligth: Story = {
  args: {},
  decorators: [ThemrDecorator(Theme.LIGHT)],
};

export const Dark: Story = { args: {} };
Dark.decorators = [ThemrDecorator(Theme.DARK)];
