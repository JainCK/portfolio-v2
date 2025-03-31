"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

// import { FaGithub } from "react-icons/fa";
// import { PiTwitterLogoFill } from "react-icons/pi";
// import { FaLinkedinIn } from "react-icons/fa";

export const Navbar = () => {
  const navItems = [
    {
      name: "Projects",
      link: "#projects",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IconMessage className="h-4 w-4 text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "Contact",
      link: "#Footer",
      icon: <IconMessage className="h-4 w-4 text-white" />,
    },
  ];

  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};
