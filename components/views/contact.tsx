"use client";
import Link from "next/link";
import { InView } from "../ui/in-view";
import {
  GitBranchIcon,
  LinkedinLogoIcon,
  MailboxIcon,
} from "@phosphor-icons/react";
import { BsTwitterX } from "react-icons/bs";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { usePageStore } from "@/store/usePageStore";

export default function Contact() {
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
        <h1 className="text-lg text-neutral-900">Let&lsquo;s connect</h1>
        <p className="text-sm leading-relaxed">
          Want to discuss a project or say hello{" "}
          <span className="font-caveat text-xl"> : ) </span>
        </p>

        <div className="">
          <div className="flex flex-col space-y-0.5 my-4 ">
            <Link
              href={"https://github.com/realkelvinworld"}
              className="transition-transform duration-200 hover:underline flex items-center gap-2"
            >
              Github
              <GitBranchIcon />
            </Link>
            <Link
              href={"https://x.com/kumordziii"}
              className="transition-transform duration-200 hover:underline flex items-center gap-2"
            >
              Twiiter
              <BsTwitterX />
            </Link>
            <Link
              href={"https://linkedin.com/in/kelvin-kumordzi-2276a61ba"}
              className="transition-transform duration-200 hover:underline flex items-center gap-2 "
            >
              LinkedIn
              <LinkedinLogoIcon />
            </Link>
            <Link
              href={"mailto:kelvin.kumordzi@inpathgroup.africa"}
              className="transition-transform duration-200 hover:underline flex items-center gap-2 "
            >
              Email
              <MailboxIcon />
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center my-10">
          <Button
            className="rounded-full"
            onClick={() => {
              setPage("works");
            }}
            size={"lg"}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>
        </div>
      </div>
    </InView>
  );
}
