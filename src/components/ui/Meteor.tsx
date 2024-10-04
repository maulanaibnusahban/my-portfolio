import Meteors from "@/components/magicui/meteors";

export function MeteorDemo() {
  return (
    <div className="absolute flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
      <Meteors number={30} />
    </div>
  );
}
