"use client";

import LoadingLayout from "@/components/animations/loading-layout";
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
    <LoadingLayout>
      <div className="min-h-screen flex flex-col items-start max-w-lg mx-auto ">
        <div className="lg:my-28 my-10 px-8 mx-auto w-full h-full">
          {/* Nav */}
          <div className="fixed z-[9999]">
            <Navbar />
          </div>

          <div className="h-full my-12 overflow-hidden">
            {CurrentView ? <CurrentView /> : null}
          </div>
        </div>
      </div>
    </LoadingLayout>
  );
}
