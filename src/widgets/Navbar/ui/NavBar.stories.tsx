import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { NavBar } from "./NavBar";
import { ThemrDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "widgets/NavBar",

  component: NavBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ligth: Story = {
  args: {},
  decorators: [ThemrDecorator(Theme.LIGHT), StoreDecorator({})],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemrDecorator(Theme.DARK), StoreDecorator({})],
};
