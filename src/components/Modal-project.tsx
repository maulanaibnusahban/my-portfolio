import { Project } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ModalProjectProps {
  selectedProject: Project;
  closeModal: () => void;
}

function Modal_project({ selectedProject, closeModal }: ModalProjectProps) {
  return (
    <main className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 overflow-y-scroll" onClick={closeModal}>
      <div
        className="relative z-50 bg-zinc-900 p-[13px] m-3 sm:p-5 sm:mt-5 rounded-lg sm:w-[1200px]" // Tambahkan padding dan background untuk modal
        onClick={(e) => e.stopPropagation()} // Mencegah event bubbling saat gambar diklik
      >
        <div className="sm:flex">
          <Image
            src={selectedProject.src}
            alt={selectedProject.title}
            width={600}
            height={300}
            className="w-auto h-auto flex-1 max-w-full sm:max-w-[800px] sm:max-h-[550px] rounded-md "
          />
          <div className="sm:px-7 w-full flex-1">
            <h1 className="text-lg font-bold mt-4 sm:text-2xl text-center text-cyan-700">{selectedProject.title}</h1>
            <div className="w-full ">
              <p className="mt-3 sm:mt-4 text-sm sm:text-base">{selectedProject.description}</p>
              <div className="mt-4">
                <h1 className="text-lg text-cyan-700">Live Preview :</h1>
                <Link href={selectedProject.href} className="text-gray-600 underline sm:text-base text-sm hover:text-white">
                  {selectedProject.href}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h1>Technology</h1>
          <div className="flex flex-wrap gap-4">
            {selectedProject.technologies.map((items) => (
              <div className="cursor-default flex" key={items.key}>
                <h1 className="text-cyan-700 text-xl font-bold"></h1>
                <div className="w-full flex gap-10 mt-2 flex-wrap ">
                  <div className="flex sm:text-base text-sm items-center sm:px-4 px-5 sm:h-12 h-12 rounded-sm border gap-2  hover:bg-zinc-800 hover:font-bold hover:scale-110 transition-all">
                    <Image src={items.src} alt="" width={25} height={25} />
                    <p>{items.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={closeModal} className="mt-5 bg-cyan-700 text-white px-4 py-2 rounded-md w-full text-center">
          Close
        </button>
      </div>
    </main>
  );
}

export default Modal_project;
