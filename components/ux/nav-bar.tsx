"use client";
import { menuItems } from "@/routes";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePageStore } from "@/store/usePageStore";

export default function Navbar() {
  /**
   * Store
   */
  const { page, setPage } = usePageStore();

  return (
    <div className="flex">
      {menuItems.map((n, index) => (
        <Tooltip key={index}>
          <div className="flex gap-2 -ml-2 hover:z-50">
            <TooltipTrigger
              className={`rounded-full size-9 flex justify-center items-center hover:scale-y-105 shadow-xs ${
                page === n.slug
                  ? `bg-black text-white hover:text-white border-none`
                  : `bg-white text-black hover:text-black border`
              }`}
              onClick={() => setPage(n.slug)}
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
