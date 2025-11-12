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
    <div className="h-screen flex flex-col  items-start max-w-3xl mx-auto">
      <div className="my-14 mx-4">
        {/* Nav */}
        <div className="fixed">
          <Navbar page={page} setPage={setPage} />
        </div>

        <div className="my-10 overflow-y-auto">{page.component}</div>
      </div>
    </div>
  );
}
