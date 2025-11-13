"use client";
import { InView } from "../ui/in-view";

export default function Me() {
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
            <h1 className="text-xl font-medium text-gray-800">
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
            <span className="font-polySans font-semibold text-cyan-800">
              web & mobile apps
            </span>{" "}
            , squash bugs, and sometimes touch grass 😅
          </p>

          <section className="py-4">
            <h2 className="text-lg text-gray-800 font-medium">
              What I can build{" "}
            </h2>

            <ul className="list-disc ml-6">
              {skills.map((s, index) => (
                <li key={index} className="py-2 text-gray-600">
                  {s.description}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* What i am working on Now */}
        <div>
          <h2 className="text-lg text-gray-800 font-medium">
            What I&apos;m Currently Working On{" "}
          </h2>
        </div>
      </div>
    </InView>
  );
}
