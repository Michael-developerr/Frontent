import { render } from "@testing-library/react";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "shared/config/i18n/i18nForTests";

export const renderWithTranslation = (component: ReactNode) => {
  return render(
    <ThemeProvider>
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    </ThemeProvider>
  );
};
