import AboutIcon from "shared/assets/icons/aboutIcon.svg";
import { FC, SVGProps } from "react";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import MainIcon from "shared/assets/icons/mainIcon.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    icon: MainIcon,
    text: "Главная",
  },
  {
    path: RoutePath.about,
    icon: AboutIcon,
    text: "О сайте",
  },
  {
    path: RoutePath.profile,
    icon: ProfileIcon,
    text: "Профиль",
  },
];
