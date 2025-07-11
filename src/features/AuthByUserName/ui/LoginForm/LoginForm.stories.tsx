import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { LoginForm } from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
Primary.decorators = [
  StoreDecorator({
    loginForm: { username: "123", password: "ada" },
  }),
];

export const withError: Story = {
  args: {},
};
withError.decorators = [
  StoreDecorator({
    loginForm: { username: "123", password: "ada", error: "Error" },
  }),
];

export const Loading: Story = {
  args: {},
};
Loading.decorators = [
  StoreDecorator({
    loginForm: { isLoading: true },
  }),
];
