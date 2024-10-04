"use client";
import { TypewriterProps } from "@/constants";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Typewriter({ text, colorCursor }: TypewriterProps) {
  const [write] = useTypewriter({
    words: text,
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 100,
  });
  return (
    <div>
      <p className="flex">
        {write} <Cursor cursorColor={colorCursor} />
      </p>
    </div>
  );
}

export default Typewriter;
