"use client";
import { BriefcaseBusinessIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Beams from "@/components/Beams";
import { routes } from "@/routes";

export default function Home() {
  /**
   * Navigation
   */
  const router = useRouter();

  return (
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
      <div className="absolute top-3 p-6">
        <p className="font-juniCode italic text-2xl text-white">
          Kelvin Kumordzi
        </p>

        <p className="text-white text-sm">Software Engineer</p>
        <div className="flex flex-col space-y-0.5 my-4 text-white">
          <Link
            href={"https://github.com/realkelvinworld"}
            className="transition-transform duration-200 hover:scale-105"
          >
            Github
          </Link>
          <Link
            href={"www.linkedin.com/in/kelvin-kumordzi-2276a61ba"}
            className="transition-transform duration-200 hover:scale-105"
          >
            LinkedIn
          </Link>
          <Link
            href={"mailto:kelvin.kumordzi@inpathgroup.africa"}
            className="transition-transform duration-200 hover:scale-105"
          >
            Email
          </Link>
        </div>
      </div>

      <div className="absolute top-3 right-3 p-6">
        {/* Button */}
        <Button
          className="rounded-full bg-white text-black hover:bg-neutral-800 hover:text-white"
          variant={"default"}
          onClick={() => router.push(routes.portfolio)}
        >
          Visit Portfolio
          <BriefcaseBusinessIcon />
        </Button>
      </div>

      {/* Where i work */}
      <div className="absolute bottom-3 p-6">
        <p className="font-medium  text-white">Working at</p>
        <div className="flex flex-col space-y-0.5">
          <Link
            href={"https://www.inpathgroup.africa/"}
            className="text-white text-sm transition-transform duration-200 hover:scale-105"
          >
            Inpath Technologies
          </Link>
          <Link
            href={"https://www.buildafghana.com/"}
            className="text-white text-sm transition-transform duration-200 hover:scale-105"
          >
            Buildaf Company Limited
          </Link>
        </div>
      </div>
    </div>
  );
}
