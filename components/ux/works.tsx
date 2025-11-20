"use client";

import { motion } from "motion/react";
import { Link2 } from "lucide-react";
import Link from "next/link";

import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogTitle,
  MorphingDialogTrigger,
} from "../motion-primitives/morphing-dialog";

import { ScrollArea } from "@/components/ui/scroll-area";

import { InView } from "../ui/in-view";
import { Works } from "../local/db";

export function WorkCards() {
  return (
    <div className="my-10 flex flex-col  space-y-10">
      <InView
        viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.09,
            },
          },
        }}
      >
        <div>
          {Works.map((w) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              key={w.id}
              className="mb-4"
            >
              <MorphingDialog
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 24,
                }}
              >
                <MorphingDialogTrigger
                  style={{
                    borderRadius: "4px",
                  }}
                  className="border w-full border-gray-200/60 bg-white"
                >
                  <div className="flex items-center space-x-3 p-3">
                    <MorphingDialogImage
                      src={
                        typeof w.images === "string" ? w.images : w.images.src
                      }
                      alt={w.images.alt}
                      className="h-10 w-10 object-cover object-top"
                      style={{
                        borderRadius: "4px",
                      }}
                    />
                    <div className="flex flex-col items-start justify-center space-y-0">
                      <MorphingDialogTitle className=" font-bold text-gray-800 sm:text-xs">
                        {w.title}
                      </MorphingDialogTitle>

                      <MorphingDialogSubtitle className="text-sm ">
                        {w.subTitle}
                      </MorphingDialogSubtitle>
                      <p className="text-xs ">{w.role}</p>
                    </div>
                  </div>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                  <MorphingDialogContent
                    style={{
                      borderRadius: "12px",
                    }}
                    className="relative lg:h-[550px] h-[500px] lg:w-[350px] w-80 border bg-white overflow-y-auto scrollbar-none"
                  >
                    <ScrollArea className="h-[90vh]" type="scroll">
                      <div className="relative p-6">
                        <div className="flex justify-center py-10">
                          <MorphingDialogImage
                            src={
                              typeof w.images === "string"
                                ? w.images
                                : w.images.src
                            }
                            alt={w.title}
                            className="h-auto w-[300px]"
                          />
                        </div>
                        <div className="">
                          <MorphingDialogTitle className="text-black">
                            {w.title}
                          </MorphingDialogTitle>
                          <MorphingDialogSubtitle className="font-light text-gray-800">
                            {w.subTitle}
                          </MorphingDialogSubtitle>
                          <p className="text-xs font-semibold">{w.role}</p>
                          <div className="mt-4 text-sm text-gray-700">
                            <p>{w.description}</p>
                          </div>
                          {w.link && (
                            <Link
                              className="mt-2 items-center flex text-zinc-400 underline truncate max-w-[250px]"
                              href={w.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Link2 className="h-5 w-5 mt-1" />
                              {w.link}
                            </Link>
                          )}
                        </div>
                      </div>
                    </ScrollArea>
                    <MorphingDialogClose className="text-zinc-500" />
                  </MorphingDialogContent>
                </MorphingDialogContainer>
              </MorphingDialog>
            </motion.div>
          ))}
        </div>
      </InView>
    </div>
  );
}
