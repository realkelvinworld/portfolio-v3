"use client";
import { HomeIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { routes } from "@/routes";
import Beams from "@/components/Beams";
import LoadingLayout from "@/components/animations/loading-layout";

export default function Home() {
  /**
   * Navigation
   */
  const router = useRouter();

  return (
    <LoadingLayout>
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
        }}
      >
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={25}
        />
        {/* <Dither
        waveColor={[0.3, 0.5, 0.8]}
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={0.3}
        colorNum={10}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.03}
      /> */}
        {/* <div className="absolute top-3 p-6">
        <p className="font-polySans font-bold text-4xl text-white  max-w-[12rem]">
          Kelvin Selassie Kumordzi
        </p>

        <p className="text-white text-base  font-medium">Software Engineer</p>
        <div className="flex flex-col space-y-0.5 my-4 text-white">
          <Link
            href={"https://github.com/realkelvinworld"}
            className="transition-transform duration-200 hover:scale-105 font-semibold"
          >
            Github
          </Link>
          <Link
            href={"https://linkedin.com/in/kelvin-kumordzi-2276a61ba"}
            className="transition-transform duration-200 hover:scale-105 font-semibold"
          >
            LinkedIn
          </Link>
          <Link
            href={"mailto:kelvin.kumordzi@inpathgroup.africa"}
            className="transition-transform duration-200 hover:scale-105 font-semibold"
          >
            Email
          </Link>
        </div>
      </div> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <div className="flex flex-col items-center gap-2">
            <div className="px-4 py-1 rounded-full border text-xs tracking-wide bg-neutral-50 ">
              <span className="text-neutral-500">Software</span>
              <span className="mx-2 text-neutral-300">/</span>
              <span className="font-semibold text-neutral-900 ">Engineer</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Kumordzi Kelvin Selassie
            </h1>
            <p className="text-neutral-50 dark:text-neutral-400 text-center max-w-xl py-3">
              I’m a Software Engineer with 3+ years of experience building
              scalable, user-focused systems across fintech, edtech, and
              government platforms. I love crafting clean, efficient, and
              intuitive digital experiences that make a real impact.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              onClick={() => router.push(routes.portfolio)}
              className="group inline-flex items-center gap-2 bg-transparent rounded-full border px-4 py-2 hover:bg-white text-white hover:text-black"
            >
              <HomeIcon className="h-4 w-4" />
              <span className="font-medium">Visit Portfolio</span>
            </Button>
          </div>
        </div>
      </div>
    </LoadingLayout>
  );
}
