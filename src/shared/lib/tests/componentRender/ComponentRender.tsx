import { render } from "@testing-library/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "shared/config/i18n/i18nForTests";
import { DeepPartial } from "utility-types";

export interface componentRenderOpions {
  route?: string;
  initialState?: DeepPartial<StateSchema>; // убери потом от сюда ? уточнить данный вопрос почему если ? то можно в props не кидать
}

export const ComponentRender = (
  component: ReactNode,
  options: componentRenderOpions = {}
) => {
  const { route = "/", initialState } = options;
  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <ThemeProvider>
          <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
        </ThemeProvider>
      </MemoryRouter>
    </StoreProvider>
  );
};
