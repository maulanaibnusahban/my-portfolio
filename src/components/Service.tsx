import React from "react";
import { MeteorDemo } from "./ui/Meteor";
import Image from "next/image";
import { SERVICE } from "@/lib/data";

function ServicePage() {
  return (
    <main>
      <MeteorDemo />
      <div className={` py-16  text-white w-full`}>
        <div className="text-center p-5 sm:p-10 w-full flex items-center flex-col">
          <div className="hader sm:w-[80%]">
            <h1 className="sm:text-5xl text-3xl">
              How <span className="text-cyan-700 font-semibold">Can</span> I <span className="text-cyan-700 font-semibold">Help</span>.?
            </h1>
            <p className="mt-4 text-base">
              Enhance your digital presence with tailored services in website development, system administration, and personalized programming
              mentorship to help you succeed!
            </p>
          </div>
          <div className="items-center w-[85%] grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14 sm:mt-20">
            {SERVICE.map((data) => (
              <div
                key={data.key}
                className="relative rounded-lg border select-none bg-zinc-950 hover:shadow-[#A3D8FF] hover:shadow-md shadow-md shadow-black-100 hover:scale-105 hover:transition-all hover:duration-300 p-4"
              >
                <div className="flex flex-col justify-between rounded-md items-center text-[#3366CC]">
                  <Image src={data.src} alt={data.key} height={70} width={70} />
                  <div>
                    <h3 className="font-bold mt-4 text-lg text-white mb-2">{data.title}</h3>
                    <p className="text-sm text-[#555e63] mb-5">{data.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ServicePage;
