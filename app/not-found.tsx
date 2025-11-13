"use client";
import { ArrowLeft, HomeIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Dither from "@/components/Dither";

export default function NotFound() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <Dither
        waveColor={[0.9, 0.6, 0.8]}
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={0.3}
        colorNum={10}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.03}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        <div className="flex flex-col items-center gap-2">
          <div className="px-4 py-1 rounded-full border text-xs tracking-wide bg-neutral-50 ">
            <span className="text-neutral-500">Error</span>
            <span className="mx-2 text-neutral-300">/</span>
            <span className="font-semibold text-neutral-900 ">
              404 Not Found
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            This page is missing or moved
          </h1>
          <p className="text-neutral-50 dark:text-neutral-400 text-center max-w-xl py-2">
            The page you’re looking for doesn’t exist. You can go back or
            explore popular sections below.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href={"/"}
            className="group inline-flex items-center gap-2 rounded-full border px-4 py-2 hover:bg-white text-white hover:text-black"
          >
            <HomeIcon className="h-4 w-4" />
            <span className="font-medium">Go Home</span>
          </Link>

          <Button
            onClick={() => history.back()}
            className="group inline-flex items-center gap-2 rounded-full border px-4 py-5 bg-black text-white hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">Go Back</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
