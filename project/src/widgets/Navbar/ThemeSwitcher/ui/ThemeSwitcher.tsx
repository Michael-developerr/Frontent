import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  return (
    <div className={classNames(cls.themeswitcher, {}, [className])}>
      
    </div>
  );
};

export default ThemeSwitcher;