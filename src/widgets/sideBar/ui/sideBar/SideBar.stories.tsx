import type { Meta, StoryObj } from "@storybook/react-webpack5";


import { SideBar } from "./SideBar";

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
  
};

export const Dark: Story = { args: {},


};


