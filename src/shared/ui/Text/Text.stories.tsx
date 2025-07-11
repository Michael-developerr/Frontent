import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Text, TextTheme } from "./Text";
import { ThemrDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Заголовок",
    text: "Текст",
  },
};

export const onlyTitle: Story = {
  args: {
    title: "Заголовок",
  },
};

export const onlyText: Story = {
  args: {
    text: "Текст",
  },
};

export const PrimaryDark: Story = {
  args: {
    title: "Заголовок",
    text: "Текст",
  },
};
PrimaryDark.decorators = [ThemrDecorator(Theme.DARK)];
export const onlyTitleDark: Story = {
  args: {
    title: "Заголовок",
  },
};
onlyTitleDark.decorators = [ThemrDecorator(Theme.DARK)];
export const onlyTextDark: Story = {
  args: {
    text: "Текст",
  },
};
onlyTextDark.decorators = [ThemrDecorator(Theme.DARK)];


export const Error: Story = {
  args: {
    title: "Заголовок",
    text: "Текст",
    theme:TextTheme.ERROR
  },
};