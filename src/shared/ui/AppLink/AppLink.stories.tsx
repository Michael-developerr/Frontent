import type { Meta, StoryObj } from "@storybook/react-webpack5";

import AppLink, { AppLinkTheme } from "./AppLink";
import { ThemrDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
  args: {
    to: "/",
    children: "Text",
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
};
export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
};

PrimaryDark.decorators = [ThemrDecorator(Theme.DARK)];
export const SecondaryPrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
};
export const Red: Story = {
  args: {
    theme: AppLinkTheme.RED,
  },
};

SecondaryPrimaryDark.decorators = [ThemrDecorator(Theme.DARK)];
export const RedPrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.RED,
  },
};
RedPrimaryDark.decorators = [ThemrDecorator(Theme.DARK)];
