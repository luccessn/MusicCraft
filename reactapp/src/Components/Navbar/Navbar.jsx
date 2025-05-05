/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
// import musicWeb from "../../Images/musicwebMARS.svg";
// Components
import { Sidebar, SidebarBody, SidebarLink } from "../Ui/Sidebar";
import AppRoutes from "../../AppRoutes";
// import { cn } from "./Lib/utils";
// import { ShootingStars } from "./Components/Ui/stars/shooting-stars";
// import { StarsBackground } from "./Components/Ui/stars/stars-background";
import { constLinks } from "../../Constants/NavBar/constLinks";
import { ShootingStars } from "../Ui/stars/shooting-stars";
import { StarsBackground } from "../Ui/stars/stars-background";
const Logo = ({ open }) => {
  return (
    <NavLink
      to="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      {/* <img src={musicWeb} alt="" className=" w-96  " /> */}
      <div />
      {open && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-medium whitespace-pre text-black dark:text-white"
        >
          𝓜𝓾𝓼𝓲𝓬 𝓒𝓻𝓪𝓯𝓽𝓮𝓻𝓼
        </motion.span>
      )}
    </NavLink>
  );
};

const Dashboard = () => {
  return (
    <div className="flex flex-1 relative">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-black p-2 md:p-10 dark:border-neutral-700">
        {/* Particles Background */}
        <div className="relative w-full z-10  ">
          <AppRoutes />
        </div>
        <ShootingStars />
        <StarsBackground />
      </div>
    </div>
  );
};

export const SidebarContent = ({ open }) => {
  return (
    <SidebarBody className="justify-between gap-10">
      <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
        <Logo open={open} />
        <div className="mt-8 flex flex-col gap-2">
          {constLinks.map((link, idx) => (
            <SidebarLink key={idx} link={link} />
          ))}
        </div>
      </div>
    </SidebarBody>
  );
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-[2300px]  w-full flex-1 flex-col border-neutral-100 bg-gray-300 md:flex-row dark:border-neutral-700 dark:bg-neutral-800 ">
      <div>
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarContent open={open} />
        </Sidebar>
      </div>
      <Dashboard />
    </div>
  );
};
