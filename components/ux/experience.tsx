import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/motion-primitives/accordion";

export function Experience() {
  return (
    <Accordion className="flex w-full my-4 flex-col divide-y divide-zinc-200 dark:divide-zinc-700">
      {/* INPATH TECHNOLOGIES */}
      <AccordionItem value="inpath">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50 flex justify-between">
          <span>Inpath Technologies</span>

          <span className="text-sm">
            2024 - <span className="font-juniCode italic">present </span>{" "}
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <span className="text-sm text-neutral-900">Software Engineer</span>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            I work as a Frontend Software Engineer on several products used
            across Ghana. I’m part of the team building and improving the Ghana
            Passport Delivery System, which handles thousands of secure
            deliveries. I also contribute to our communications platform that
            powers tens of thousands of SMS interactions, and I’m currently
            maintaining an internal email templating tool that helps the company
            streamline communication. I actively support Identity Verification
            service used by financial and telecom institutions among others.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* ZEDI */}
      <AccordionItem value="zedi">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50 flex justify-between">
          <span>Zedi</span>
          <span className="text-sm">
            2024 - <span className="font-juniCode italic">present </span>{" "}
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <span className="text-sm text-neutral-900">Front-End Engineer</span>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            I handle all web infrastructure, turn designs into clean and
            responsive pages, and work closely with the backend and mobile teams
            to keep everything connected smoothly. I also helped build the admin
            dashboard and continue improving performance, UX, and the overall
            flow of the platform.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* BUILDAF COMPANY LTD */}
      <AccordionItem value="buildaf">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50 flex justify-between">
          <span>Buildaf Company Ltd</span>
          <span className="text-sm">
            2023 - <span className="font-juniCode italic">present </span>{" "}
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <span className="text-sm text-neutral-900">
            Web Developer / Assistant Marketing Agent
          </span>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Designed and built the company’s website to improve visibility and
            showcase available properties. Also managed social media content and
            engagement, helping strengthen the company’s digital presence.
          </p>
        </AccordionContent>
      </AccordionItem>
      {/* SME CLOUD */}
      <AccordionItem value="sme-cloud">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc- flex justify-between">
          SME Cloud
          <span className="text-sm">2025</span>
        </AccordionTrigger>
        <AccordionContent>
          <span className="text-sm text-neutral-900">
            Frontend Software Engineer
          </span>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Contributing to scalable front-end solutions for cloud-based
            services. I work closely with designers, product managers, and
            backend engineers to build responsive, accessible interfaces. I also
            helped shape the design system and implemented reusable components
            to improve consistency and scalability.
          </p>
        </AccordionContent>
      </AccordionItem>
      {/* PENTECOST UNIVERSITY */}
      <AccordionItem value="pentecost">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc- flex justify-between">
          <span>Pentecost University</span>
          <span className="text-sm">2023</span>
        </AccordionTrigger>
        <AccordionContent>
          <span className="text-sm text-neutral-900">
            Teaching Assistant / Junior Software Developer
          </span>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Built a responsive department website to improve visibility and
            engagement. Assisted in teaching by preparing lessons, leading
            sessions on CAD principles, and supporting students through hands-on
            learning.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* ITTEENS */}
      <AccordionItem value="itteens">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc- flex justify-between ">
          <span>IT-TEENS</span>
          <span className="text-sm">
            2021 - <span className="font-juniCode italic">present </span>{" "}
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <span className="text-sm text-neutral-900">Teaching Assistant</span>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Taught HTML, CSS, and JavaScript to young learners through hands-on
            lessons. Managed classrooms, graded assignments, and supported
            learning for groups of up to 15 students both online and in person.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
