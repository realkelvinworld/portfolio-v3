"use client";
import { ChevronRight, HomeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { TextEffect } from "../motion-primitives/text-effect";
import { usePageStore } from "@/store/usePageStore";
import { InView } from "../ui/in-view";
import { Button } from "../ui/button";
import { Zedi } from "@/public/images";

export default function Me() {
  /**
   * store
   */
  const { setPage } = usePageStore();

  /**
   * Navigation
   */
  const router = useRouter();

  const skills = [
    {
      id: 1,
      description:
        "Build responsive and intuitive web applications with React / Next.js / Vite ",
    },
    {
      id: 2,
      description:
        "Design and develop secure and scalable mobile applications with  React Native",
    },
    {
      id: 3,
      description:
        "Design and prototype user interfaces efficiently using Figma",
    },

    { id: 4, description: "Learn frameworks and tools fast ⚡️" },
    { id: 5, description: "I teach kids how to code too :)" },
  ];

  const currentWork = [
    {
      image: Zedi,
      projectName: "Zedi - Crypto to Cash",
      description:
        "Zedi is a mobile app that makes managing crypto and Cedis easy. Convert any supported cryptocurrency to Cedis, pay bills, and send money all in one simple app.",
      projectUrl: "https://www.zedi.app/",
      urlSlug: "zedi.app",
      tags: ["Next.js", "Framer", "Crypto"],
    },
  ];

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
      <div className="py-4 font-sans ">
        <div className="flex flex-col space-y-1">
          <section className="">
            <h1 className="text-lg flex gap-1 text-neutral-900">
              {/* Hi, I&apos;m{" "} */}
              <TextEffect
                per="char"
                speedReveal={0.5}
                className="font-caveat text-xl"
              >
                Kelvin Kumordzi
              </TextEffect>
            </h1>
          </section>
          <p className="text-gray-500">
            Software Engineer at{" "}
            <Link
              href={"https://www.inpathgroup.africa/"}
              className="hover:underline  text-green-900"
            >
              {" "}
              Inpath Technologies{" "}
            </Link>
          </p>
          <hr className="my-2" />
        </div>

        {/* A little about me */}
        <div>
          <p className="text-sm">
            I build <span className="text-neutral-900">web & mobile apps</span>
            ,squash bugs, and sometimes touch grass
          </p>

          <section className="py-4">
            <h1 className="text-lg text-neutral-900">What I can do </h1>

            <ul className="list-disc ml-6">
              {skills.map((s, index) => (
                <li key={index} className="py-2 text-sm">
                  {s.description}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* What i am working on Now */}
        <div className="flex flex-col space-y-3">
          <h1 className="text-lg text-neutral-900">
            What I&apos;m Working On{" "}
          </h1>

          {/* card */}

          {currentWork.map((c, index) => (
            <div className="p-4 rounded-3xl border bg-gray-50" key={index}>
              <section className="flex gap-2 items-center">
                <div className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center border bg-white">
                  <Image
                    src={c.image}
                    alt="User Image"
                    width={20}
                    height={20}
                    quality={100}
                    className="w-3"
                  />
                </div>
                <p className=" lg:text-base text-sm my-2 text-neutral-900">
                  {c.projectName}
                </p>
              </section>

              <section>
                <p className="lg:text-sm text-xs leading-relaxed">
                  {c.description}
                </p>
              </section>

              <section className="flex justify-between items-center">
                <section className="flex items-center gap-2 my-2">
                  {c.tags.map((t, index) => (
                    <p
                      key={index}
                      className="text-xs rounded-3xl border bg-white px-2 py-1 tex-gray-500 text-neutral-900"
                    >
                      {t}
                    </p>
                  ))}
                </section>

                <Link href={c.projectUrl} className="text-emerald-800 text-sm">
                  {c.urlSlug}
                </Link>
              </section>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center my-4">
        <Button
          className="rounded-full"
          onClick={() => {
            router.push("/");
          }}
          size={"lg"}
        >
          <HomeIcon className="w-4 h-4" />
          Home
        </Button>

        <Button
          className="rounded-full"
          onClick={() => {
            setPage("about");
          }}
          size={"lg"}
        >
          Next <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </InView>
  );
}
