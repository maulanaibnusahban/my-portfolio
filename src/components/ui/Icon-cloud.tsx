import { icons_slugs } from "@/constants";
import IconCloud from "../magicui/icon-cloud";

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg px-10">
      <IconCloud iconSlugs={icons_slugs} />
    </div>
  );
}
