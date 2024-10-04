import { SOCIAL_MEDIA } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SocialMedia() {
  return (
    <main>
      <h1 className="text-cyan-700 text-xl font-bold">My Social Media</h1>
      <div className="w-full h-auto flex flex-wrap justify-between mt-5 gap-4">
        {SOCIAL_MEDIA.map((data) => (
          <Link key={data.key} legacyBehavior href={data.href}>
            <div
              className={`sm:w-calc_social_media w-calc_social_media_sm flex h-20 border-[1.3px] cursor-pointer rounded-sm bg-zinc-900 transition-all hover:scale-105`}
              style={{ borderColor: data.color }}
            >
              <div className="w-[30%] flex justify-center items-center">
                <Image src={data.src} alt={data.label} width={60} height={60} className="w-12 h-12" />
              </div>
              <div className="flex flex-col justify-center h-full px-2">
                <p style={{ color: data.color }}>{data.label}</p>
                <p className="text-gray-500 text-sm">{data.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default SocialMedia;
