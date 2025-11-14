"use client";

import { usePageStore } from "@/store/usePageStore";
import Navbar from "@/components/ux/nav-bar";
import { menuItems } from "@/routes";

export default function Page() {
  /**
   * store
   */
  const { page } = usePageStore();
  const CurrentView = menuItems.find((m) => m.slug === page)?.route;

  return (
    <div className="h-screen flex flex-col  items-start max-w-lg mx-auto ">
      <div className="lg:my-28 my-10 px-6 mx-auto w-full h-full">
        {/* Nav */}
        <div className="">
          <Navbar />
        </div>

        <div className="h-full">{CurrentView ? <CurrentView /> : null}</div>
      </div>
    </div>
  );
}
