import cls from "./SidebarItem.module.scss";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";

import { useTranslation } from "react-i18next";
import { SidebarItemType } from "../../model/items";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";

interface SidebartemProps {
  item: SidebarItemType;
  collapsed?: boolean;
}

export const Sidebartem = memo(({ item, collapsed }: SidebartemProps) => {
  const { t } = useTranslation();
  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item?.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed ?? false })}
    >
      <item.icon className={cls.icon} />{" "}
      <span className={cls.link}> {t(item?.text)}</span>
    </AppLink>
  );
});
