"use client";
import { menuItems } from "@/routes";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { JSX } from "react";

export default function Navbar({
  page,
  setPage,
}: {
  page: {
    slug: string;
    component: JSX.Element;
  };
  setPage: React.Dispatch<
    React.SetStateAction<{
      slug: string;
      component: JSX.Element;
    }>
  >;
}) {
  /**
   * Function
   */

  const handlePageChange = (slug: string, component: JSX.Element) => {
    setPage({
      slug: slug,
      component: component,
    });
  };

  return (
    <div className="flex">
      {menuItems.map((n, index) => (
        <Tooltip key={index}>
          <div className="flex gap-2 -ml-2 hover:z-50">
            <TooltipTrigger
              className={`rounded-full size-9 flex justify-center items-center hover:scale-y-105 shadow-xs ${
                page.slug === n.slug
                  ? `bg-black text-white hover:text-white`
                  : `bg-white text-black hover:text-black border-[0.2px] border-accent`
              }`}
              onClick={() => handlePageChange(n.slug, n.route)}
            >
              {n.icon}

              <TooltipContent>
                <p>{n.title}</p>
              </TooltipContent>
            </TooltipTrigger>
          </div>
        </Tooltip>
      ))}
    </div>
  );
}
