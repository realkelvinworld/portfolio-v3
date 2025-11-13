"use client";
import Navbar from "@/components/ux/nav-bar";
import { menuItems } from "@/routes";

import { useState } from "react";

export default function Page() {
  /**
   * State
   */
  const [page, setPage] = useState({
    slug: menuItems[0].slug,
    component: menuItems[0].route,
  });

  return (
    <div className="h-screen flex flex-col  items-start max-w-lg mx-auto ">
      <div className="lg:my-28 my-14 px-4 mx-auto w-full h-full">
        {/* Nav */}
        <div className="fixed">
          <Navbar page={page} setPage={setPage} />
        </div>

        <div className="my-10 h-full overflow-hidden">{page.component}</div>
      </div>
    </div>
  );
}
