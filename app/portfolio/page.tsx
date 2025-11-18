"use client";

import { usePageStore } from "@/store/usePageStore";
import Navbar from "@/components/ux/nav-bar";
import { menuItems } from "@/routes";
import LoadingLayout from "@/components/animations/loading-layout";

export default function Page() {
  /**
   * store
   */
  const { page } = usePageStore();
  const CurrentView = menuItems.find((m) => m.slug === page)?.route;

  return (
    <LoadingLayout>
      <div className="h-screen flex flex-col items-start max-w-lg mx-auto ">
        <div className="lg:my-28 my-10 px-8 mx-auto w-full h-full">
          {/* Nav */}
          <div className="fixed">
            <Navbar />
          </div>

          <div className="h-full my-12">
            {CurrentView ? <CurrentView /> : null}
          </div>
        </div>
      </div>
    </LoadingLayout>
  );
}
