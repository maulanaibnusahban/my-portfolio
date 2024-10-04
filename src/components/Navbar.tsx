"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed z-50 my-4 mt-3 py-4 w-[97%] bg-[#3e4042] bg-opacity-20 backdrop-blur-sm rounded-xl text-white nav-bg md:w-auto md:py-4 md:px-10">
      <ul className="flex justify-between px-4 text-sm md:gap-12 md:text-base">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className={`${pathname === link.href ? "text-cyan-600 border-b-2 border-cyan-800" : ""} ${
              pathname === "/" ? "hover:text-white hover:border-white" : "hover:text-cyan-600 border-cyan-600"
            } transition-all hover:font-bold hover:scale-110 hover:border-b-2 `}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
