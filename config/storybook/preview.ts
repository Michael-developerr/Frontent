import { StyleGlDecorator } from "./../../src/shared/config/storybook/StyleGlDecorator/StyleGlDecorator";
import { Theme } from "./../../src/app/providers/ThemeProvider/lib/ThemeContext";

import { ThemrDecorator } from "./../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "./../../src/shared/config/storybook/RouterDecorator/RouterDecorator";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [StyleGlDecorator, ThemrDecorator(Theme.LIGHT), RouterDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chromatic: {
      disableAnimations: true,
      delay: 300,
    },
  },
};

export default preview;
