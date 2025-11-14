"use client";
import { ChevronRight } from "lucide-react";
import { InView } from "../ui/in-view";
import { Button } from "../ui/button";

import { usePageStore } from "@/store/usePageStore";
import Image from "next/image";
import { Zedi } from "@/public/images";
import Link from "next/link";

export default function Me() {
  /**
   * store
   */
  const { setPage } = usePageStore();

  const skills = [
    {
      id: 1,
      description:
        "Build responsive and intuitive web applications with React / Next.js / Vite ",
    },
    {
      id: 2,
      description:
        "Design and develop secure and scalable mobile applications with React / React Native",
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
        "Zedi is a mobile app that makes managing crypto and Cedis easy. Instantly convert Bitcoin, USDT, Ethereum  and other crypto currencies to Ghanaian Cedis, pay bills, send money all in one secure and simple app",
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
      <div className="py-4 font-sans">
        <div className="flex flex-col space-y-1">
          <section>
            <h1 className="text-xl text-gray-600 font-polySans font-medium">
              Hi, I&apos;m Kelvin Kumordzi
            </h1>
          </section>
          <p className="text-gray-500 font-medium">Software Engineer</p>
          <hr className="my-2" />
        </div>

        {/* A little about me */}
        <div>
          <p className="text-gray-600">
            I build{" "}
            <span className="font-polySans font-semibold text-cyan-800/60">
              web & mobile apps
            </span>{" "}
            , squash bugs, and sometimes touch grass 😅
          </p>

          <section className="py-4">
            <h2 className="text-lg text-gray-600 font-polySans font-medium">
              What I can build{" "}
            </h2>

            <ul className="list-disc ml-6">
              {skills.map((s, index) => (
                <li key={index} className="py-2 text-sm text-gray-600">
                  {s.description}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* What i am working on Now */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-lg text-gray-600 font-polySans font-medium">
            What I&apos;m Currently Working On{" "}
          </h2>

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
                <p className="font-medium font-polySans text-gray-700 my-2">
                  {c.projectName}
                </p>
              </section>

              <section>
                <p className="text-sm text-gray-600">{c.description}</p>
              </section>

              <section className="flex justify-between items-center">
                <section className="flex items-center gap-2 my-2">
                  {c.tags.map((t, index) => (
                    <p
                      key={index}
                      className="text-xs rounded-3xl border bg-white px-2 py-1 tex-gray-500"
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
      <div className="flex justify-end">
        <Button
          className="rounded-full"
          onClick={() => {
            setPage("about");
          }}
          size={"lg"}
        >
          Next <ChevronRight />
        </Button>
      </div>
    </InView>
  );
}
