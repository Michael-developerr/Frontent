import { Theme } from "./../../src/app/providers/ThemeProvider/lib/ThemeContext";
import { StyleDecorator } from "../../src/shared/config/storybook/styleDecorator/styleDecorator";

import { ThemrDecorator } from "./../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [StyleDecorator, ThemrDecorator(Theme.LIGHT)],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
