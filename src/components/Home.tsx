import Particles from "@/components/ui/Particles";
import "@/app/globals.css";
import { TextGenerateEffect } from "@/components/ui/Text-generate-effect";
import Link from "next/link";
import Cursor from "@/components/ui/Cursor";
import { MeteorDemo } from "@/components/ui/Meteor";
import Button from "@/components/ui/Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const githubLink = process.env.GITHUB_LINK;
  return (
    <main className="w-full h-screen md:max-h-[700px] relative cursor-default inset-0">
      <div className="flex justify-center flex-col md:mt-8 items-center w-full h-full absolute z-20 gap-6  text-white">
        <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Hi, I'm Maulana Your Dedicated Web Development"
            className="text-center text-[37px] md:text-6xl lg:text-[5rem] font-bold"
          />
          <h2 className="text-xs md:text-base uppercase tracking-widest text-center">portfolio website with Type Script and next.js</h2>
        </div>
        <Link href={`${githubLink}`}>
          <Button
            label="Github"
            icon={faGithub}
            classNameButton="boton-elegante py-2 sm:px-7 px-5 hover:scale-110"
            classNameIcon="sm:w-8 w-6"
            colorIcon="#ffffff"
          />
        </Link>
      </div>
      <Cursor color_rgb="0, 255, 255" />
      <MeteorDemo />
      <Particles className="h-full" />
    </main>
  );
}
