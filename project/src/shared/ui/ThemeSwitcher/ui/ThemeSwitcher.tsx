import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";

import SunIcon from "shared/assets/icons/sun.svg";
import DarkIcon from "shared/assets/icons/nigth.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.themeSwitcher, {}, [className?? ''])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon width="50" height="50" /> : <SunIcon />}
    </Button>
  );
};
