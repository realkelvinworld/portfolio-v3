import Navbar from "@/components/ux/nav-bar";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-2">
      <div className="max-w-4xl mx-auto  flex justify-start lg:mt-36 mt-14 p-2">
        <Navbar />
      </div>
      <div className="max-w-4xl mx-auto  flex flex-col justify-center  p-6">
        {children}
      </div>
    </div>
  );
}
