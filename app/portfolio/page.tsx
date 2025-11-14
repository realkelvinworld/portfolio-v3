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
      <div className="lg:my-28 my-14 px-4 mx-auto w-full h-full">
        {/* Nav */}
        <div className="fixed">
          <Navbar />
        </div>

        <div className="my-10 h-full overflow-hidden">
          {CurrentView ? <CurrentView /> : null}
        </div>
      </div>
    </div>
  );
}
