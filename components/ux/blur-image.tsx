import Image from "next/image";

import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { MeNow } from "@/public/images";

import { TextEffect } from "../motion-primitives/text-effect";
import { Tilt } from "../motion-primitives/tilt";

export function ProgressiveBlurImage() {
  return (
    <div className="-z-50">
      <Tilt rotationFactor={8} isRevese className="">
        <div className="relative my-4 aspect-square w-[300px] overflow-hidden rounded-lg">
          <Image
            src={MeNow}
            alt="Kelvin Kumordzi "
            className="absolute inset-0"
            quality={100}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute bottom-0 left-0 h-[50%] w-full"
            blurIntensity={6}
          />
          <div className="absolute bottom-0 left-0">
            <div className="flex flex-col items-start gap-0 px-5 py-4">
              <TextEffect
                per="char"
                speedReveal={0.5}
                className="font-caveat text-xl text-white"
              >
                Kelvin Kumordzi
              </TextEffect>
              <span className="mb-2 text-base text-zinc-300">
                Yep! thats me 😅
              </span>
              <p className="text-base text-white"></p>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}
