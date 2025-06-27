import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { Modal } from "./Modal";
import { ThemrDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen:true,
    children:
      "Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100",
  },
};

export const DarkPrimary: Story = {
  args: {
    isOpen:true,
    children:
      "Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100",
  },
};
DarkPrimary.decorators = [ThemrDecorator(Theme.DARK)];
