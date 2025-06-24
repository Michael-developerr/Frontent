import { Theme } from "./../../src/app/providers/ThemeProvider/lib/ThemeContext";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";

import { ThemrDecorator } from "./../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "./../../src/shared/config/storybook/RouterDecorator/RouterDecorator";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [StyleDecorator, ThemrDecorator(Theme.LIGHT), RouterDecorator],
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
