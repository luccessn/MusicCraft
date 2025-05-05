/* eslint-disable prettier/prettier */
import {
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconLogout,
  IconLogin2,
  IconCarTurbine,
} from "@tabler/icons-react";
import React from "react";
import { routes } from "../ConstRouts/routes";
import { logOutAction } from "../../Context/AppActionsCreator";

export const constLinks = [
  {
    label: "Dashboard",
    href: "#",
    icon: (
      <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
    contents: [
      { label: "Overview", href: "/signup" },
      { label: "Analytics", href: "#" },
      { label: "Reports", href: "#" },
    ],
  },
  {
    label: "Profile",
    href: "#",
    icon: (
      <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
    return: (
      <div>
        <h1 className="text-white bg-red-600 text-4xl">LALALA</h1>
      </div>
    ),
  },
  {
    label: "Settings",
    href: "#",
    icon: (
      <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Registration",
    href: routes.signUp,
    icon: (
      <IconCarTurbine className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "SignIn",
    href: routes.signIn,
    icon: (
      <IconLogin2 className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Logout",
    href: "#",
    icon: (
      <IconLogout className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
    dispatch: logOutAction(),
  },
];

export const navbar = [
  {
    name: "Features",
    link: "#features",
  },
  {
    name: "Pricing",
    link: "#pricing",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];
