import { ActionIcon, ButtonProps } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import { ReactNode } from "react";

interface NavLink {
  title: ReactNode;
  href: string;
  exact?: boolean;
  icon?: ReactNode;
  props?: ButtonProps;
}

interface NavGroup {
  title: ReactNode;
  value: string;
  icon?: ReactNode;
  children: NavLink[];
}

type NavItem =
  //| NavGroup
  NavLink;

// IMPORTANT: place NavLinks first
export const NAV_ITEMS: NavItem[] = [
  {
    title: "خانه",
    href: "/",
    exact: true,
  },
  {
    title: "تنظیمات",
    href: "/settings",
  },
  {
    title: "کاربران",
    href: "/users",
  },
  {
    title: "پست ها",
    href: "/posts",
  },
];
