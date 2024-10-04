import { CERTIFICATION } from "@/lib/data";
import Image from "next/image";
import React, { useState } from "react";

function Certificate() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State untuk menyimpan gambar yang dipilih

  // Function untuk menampilkan modal dengan gambar yang diklik
  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  // Function untuk menutup modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <main className="">
      <h1 className="text-cyan-700 text-xl font-bold">My Certificate</h1>
      <div className="w-full mt-7 flex flex-wrap justify-between gap-8">
        {CERTIFICATION.map((data) => (
          <div key={data.key} className="sm:w-calc_card">
            <div
              className="hover:border-cyan-700 border-[2.5px] overflow-hidden hover:scale-105 transition-all rounded-lg cursor-pointer"
              onClick={() => openModal(data.src)} // Ketika card diklik, gambar akan dibuka di modal
            >
              <Image src={data.src} alt={data.title} width={300} height={150} className="w-full h-auto" />
              <div className="p-3 text-white backdrop-blur-lg bg-zinc-900 px-4 rounded-b-lg pb-5">
                <h1 className="text-lg font-bold">{data.title}</h1>
                <p className="mt-2 text-gray-500">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70" onClick={closeModal}>
          <div
            className="relative z-50"
            onClick={(e) => e.stopPropagation()} // Mencegah event bubbling saat gambar diklik
          >
            <Image
              src={selectedImage}
              alt="certificate modal"
              width={800}
              height={400}
              className="w-auto h-auto max-w-full max-h-[80vh] sm:max-w-[900px] sm:max-h-[500px]"
            />
            <button onClick={closeModal} className="absolute top-2 right-2 sm:-top-2 sm:-right-7 text-white bg-red-600 rounded-full p-2">
              X
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Certificate;
