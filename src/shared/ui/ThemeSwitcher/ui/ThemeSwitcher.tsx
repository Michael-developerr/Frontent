import { classNames } from "shared/lib/classNames/classNames";

import { Theme, useTheme } from "app/providers/ThemeProvider";

import SunIcon from "shared/assets/icons/sun.svg";
import DarkIcon from "shared/assets/icons/nigth.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className?? ''])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon width="50" height="50" /> : <SunIcon />}
    </Button>
  );
};
