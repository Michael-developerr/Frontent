import { classNames } from "shared/lib/classNames/classNames";

import cls from "./NavBar.module.scss";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className ?? ""])}>
      {/* <ThemeSwitcher/> */}
      <div className={cls.links}>/</div>
    </div>
  );
};
