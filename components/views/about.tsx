"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { InView } from "../ui/in-view";
import { ProgressiveBlurImage } from "../ux/blur-image";
import { Experience } from "../ux/experience";
import { usePageStore } from "@/store/usePageStore";

export default function About() {
  /**
   * store
   */
  const { setPage } = usePageStore();

  return (
    <InView
      variants={{
        hidden: {
          opacity: 0,
          x: 100,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      viewOptions={{ margin: "0px 0px -350px 0px" }}
    >
      <div>
        {/* Picture */}
        <ProgressiveBlurImage />

        {/* A little about me */}
        <div className="my-4">
          <h1 className="text-lg text-neutral-900">Who i am </h1>
          <p className="text-sm leading-relaxed">
            I’ve always loved the mix of{" "}
            <span className="font-caveat text-lg text-neutral-900"> art </span>{" "}
            and{" "}
            <span className="font-juniCode text-lg italic text-neutral-900">
              {" "}
              technology{" "}
            </span>
            . From the start, I just enjoyed creating things small ideas, simple
            projects, anything that let me explore both sides. That curiosity
            naturally pulled me into design here and there, and eventually into
            software engineering.
            <br />
            <br />
            Over the years, I’ve tried a bit of everything: web design, no-code
            tools, building products, and writing software. Every step, big or
            small, has taught me something and shaped the way I create today.
            <br />
            <br />
            Outside all the tech, I love football, music and art. I play drums
            too.Sometime do a little nature, and some good food. I enjoy
            learning, trying new things, and bringing ideas to life.
          </p>
        </div>

        {/* Experience */}
        <div className="my-4">
          <h1 className="text-lg text-neutral-900">Experience</h1>
          <p className="text-sm">
            Some of the roles I’ve taken on and the places I’ve worked at over
            the years
          </p>
          <Experience />
        </div>

        <div className="flex justify-between items-center my-8">
          <Button
            className="rounded-full"
            onClick={() => {
              setPage("me");
            }}
            size={"lg"}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>

          <Button
            className="rounded-full"
            onClick={() => {
              setPage("skills");
            }}
            size={"lg"}
          >
            Next <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </InView>
  );
}
