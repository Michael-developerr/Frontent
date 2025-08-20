import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss";
import { memo, useMemo, useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";

import { SidebarItemsList } from "widgets/sideBar/model/items";
import { Sidebartem } from "../SidebarItem/Sidebartem";

interface SideBarProps {
  className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);





  const itemList = useMemo(() => {
    return SidebarItemsList.map((item) => (
      <Sidebartem item={item} collapsed={collapsed} key={item.path} />
    ));
  }, [collapsed]);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className ?? "",
      ])}
    >
      <Button
        data-testid={"sidebarToggle"}
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>
        {itemList}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
});
