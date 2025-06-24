import { Decorator } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";


export const ThemrDecorator =
  (theme: Theme): Decorator =>
  (Story) => {
    return (
      <div className={`app ${theme}`}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    );
  };




  ThemrDecorator