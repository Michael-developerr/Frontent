import { Decorator } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

export const ThemrDecorator =
  (theme: Theme): Decorator =>
  (Story) => {
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <Story />
        </div>
      </ThemeProvider>
    );
  };
