"use client";
import Modal_project from "@/components/Modal-project";
import { Project } from "@/constants";
import { PROJECT } from "@/lib/data";
import Image from "next/image";
import React, { useState } from "react";
import { MeteorDemo } from "./ui/Meteor";

function ProjectPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Function untuk menampilkan modal dengan gambar yang diklik
  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <MeteorDemo />
      <div className={`${selectedProject != null ? "z-50" : "z-10"} py-16 sm:py-20 text-white w-full`}>
        <div className="mt-10 text-center w-full flex items-center flex-col">
          <div className="header">
            <h1 className="sm:text-5xl 2xl:text-6xl text-3xl">
              Showcasing My <span className="text-cyan-700 font-semibold">Code</span> in <span className="text-cyan-700 font-semibold">Action</span>.
            </h1>
            <p className="mt-4 text-base">
              A collection of web projects that highlight my skills in creating seamless, responsive, and dynamic user experiences.
            </p>
          </div>
          <div className="mt-14 w-[85%] flex flex-wrap justify-between gap-10">
            {PROJECT.map((data) => (
              <div key={data.key} className="sm:w-calc_card" onClick={() => openModal(data)}>
                <div className="hover:border-cyan-700 border-[2.5px] overflow-hidden hover:scale-105 transition-all rounded-lg cursor-pointer">
                  <Image src={data.src} alt={data.title} width={300} height={150} className="w-full h-auto" />
                  <div className="p-3 text-white backdrop-blur-lg bg-zinc-900 text-start px-4 rounded-b-lg pb-5">
                    <h1 className="text-lg font-bold">{data.title}</h1>
                    <div className="mt-4 underline">Click for Detail . .</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedProject && <Modal_project selectedProject={selectedProject} closeModal={closeModal} />}
      </div>
    </>
  );
}

export default ProjectPage;
