import { render } from "@testing-library/react";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "shared/config/i18n/i18nForTests";

export interface componentRenderOpions {
  route?: string;
}

export const ComponentRender = (
  component: ReactNode,
  options: componentRenderOpions = {}
) => {
  const { route = "/" } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <ThemeProvider>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
};
