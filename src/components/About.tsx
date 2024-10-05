"use client";

import React, { useState } from "react";
import "@/app/about/style.css";
import Particles from "@/components/ui/Particles";
import { Handjet } from "next/font/google";
import "@/app/globals.css";
import { IconCloudDemo } from "@/components/ui/Icon-cloud";
import Link from "next/link";
import Button_contact from "@/components/ui/Button-contact";
import Typewriter from "@/components/ui/Typewriter";
import Technology from "./Technology";
import Certificate from "./Certificate";
import SocialMedia from "./SocialMedia";
import { NAV_ABOUT } from "@/lib/data";

const handjet = Handjet({
  weight: "600",
  subsets: ["latin"],
});

function About() {
  const [activeNav, setActiveNav] = useState<string>("technology");

  let ComponentToRender;

  if (activeNav === "technology") {
    ComponentToRender = <Technology />;
  } else if (activeNav === "certificate") {
    ComponentToRender = <Certificate />;
  } else if (activeNav === "social_media") {
    ComponentToRender = <SocialMedia />;
  } else {
    ComponentToRender = null;
  }

  const handleNavClick = (key: string) => {
    setActiveNav(key);
  };

  return (
    <main className="text-white relative w-full h-auto">
      <div className="sm:px-14 px-2 sm:py-20 pt-20 pb-14">
        <div className=" backdrop-blur-lg bg-zinc-900 relative sm:h-[550px] w-full rounded-xl overflow-hidden">
          <Particles className="h-full inset-0 w-full absolute -z-10" />
          <div className="w-full h-full sm:grid sm:grid-cols-2 grid-rows-6 gap-1">
            <div
              className={`${handjet.className} flex text-nowrap sm:col-span-1 sm:row-span-2 row-span-1 sm:px-9 px-5 py-3 sm:text-[5em] text-[3em] sm:items-end tracking-wider`}
              translate="no"
            >
              Hello <span className="text-cyan-700 sm:ml-5 ml-3">Everyone ;</span>
            </div>
            <div className="hidden sm:flex col-span-1 row-span-6 justify-center items-center mb-6">
              <IconCloudDemo />
            </div>

            <div className="col-span-1 sm:row-span-4 row-span-1 px-5 sm:px-0 sm:pl-9 sm:pt-4 tracking-wide ">
              <p className="text-base sm:text-lg sm:mb-6 mb-4">
                Hi, I&apos;m Maulana Ibnu Sahban from indonesia, a passionate Web Development who thrives on learning something new every day. I love
                diving into fresh ideas and exploring innovative solutions. For me, creating engaging and functional software experiences is not just
                a job, it&apos;s a mission to make the digital world more intuitive and enjoyable.
              </p>
              <Link href="/contact">
                <Button_contact />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-20 sm:mt-7 sm:px-20 px-5 ">
        <h1 className={`${handjet.className} text-5xl sm:text-6xl flex gap-3`}>
          Im
          <span className="text-cyan-700" translate="no">
            <Typewriter text={["Maulana Ibnu S.", "Web Development"]} colorCursor="#0e7490" />
          </span>
        </h1>
        <div className="h-auto w-full">
          <nav className="flex gap-2 mt-5 text-[15px] sm:text-lg">
            {NAV_ABOUT.map((item) => (
              <p
                key={item.key}
                className={`flex items-center px-3 py-2 sm:py-[2px]  rounded-sm cursor-pointer ${
                  activeNav === item.key ? "bg-cyan-700" : "bg-transparent"
                }`}
                onClick={() => handleNavClick(item.key)}
              >
                {item.label}
              </p>
            ))}
          </nav>
          <div className="h-auto w-full mt-10">{ComponentToRender}</div>
        </div>
      </div>
    </main>
  );
}

export default About;
