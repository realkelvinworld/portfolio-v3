"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { usePageStore } from "@/store/usePageStore";

import { WorkCards } from "../ux/works";
import { InView } from "../ui/in-view";
import { Button } from "../ui/button";

export default function Mywork() {
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
        <h1 className="text-lg text-neutral-900">My Work</h1>
        <p className="text-sm leading-relaxed">
          A comprehensive dive into all projects i have worked on for clients
          and institutions
        </p>
        <WorkCards />

        <div className="flex justify-between items-center my-3">
          <Button
            className="rounded-full"
            onClick={() => {
              setPage("about");
            }}
            size={"lg"}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>

          <Button
            className="rounded-full"
            onClick={() => {
              setPage("contact");
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
