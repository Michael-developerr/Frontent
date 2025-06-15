import { classNames } from "shared/lib/classNames/classNames";

import cls from "./NavBar.module.scss";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
          className={cls.mainlinks}
        >
          {" "}
          Главная
        </AppLink>
        <AppLink
          theme={AppLinkTheme.RED}
          to={"/about"}
          className={cls.mainlinks}
        >
          О сайте
        </AppLink>
      </div>
    </div>
  );
};

export default NavBar;
