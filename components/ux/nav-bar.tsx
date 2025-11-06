"use client";
import { menuItems } from "@/routes";
import { usePathname, useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Navbar() {
  /**
   * Navigation
   */
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex">
      {menuItems.map((n, index) => (
        <Tooltip key={index}>
          <div className="flex gap-2 -ml-2 hover:z-50">
            <TooltipTrigger
              className={`rounded-full size-9 flex justify-center items-center hover:scale-y-105 border ${
                pathname === n.route
                  ? `bg-black text-white hover:text-white`
                  : `bg-white text-black hover:text-black border`
              }`}
              onClick={() => router.push(n.route)}
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
