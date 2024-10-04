import { ABOUT_TECH } from "@/lib/data";
import Image from "next/image";
import React from "react";

function Technology() {
  return (
    <main>
      {ABOUT_TECH.map((items) => (
        <div key={items.category} className="cursor-default">
          <h1 className="text-cyan-700 text-xl font-bold">{items.category}</h1>
          <div className="w-full flex gap-10 mt-5 mb-11 sm:mb-14 flex-wrap ">
            {items.technologies.map((index) => (
              <div
                className="flex sm:text-base text-sm items-center sm:px-6 px-5 sm:h-14 h-12 rounded-sm border gap-2  hover:bg-zinc-800 hover:font-bold hover:scale-110 transition-all"
                key={index.key}
              >
                <Image src={`${index.src}`} alt={index.label} width={25} height={25} className={index.className} />
                <p>{index.label}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}

export default Technology;
