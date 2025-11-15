"use client";
import { InView } from "../ui/in-view";

export default function Mywork() {
  return (
    <InView
      variants={{
        hidden: {
          opacity: 0,
          x: 100,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      viewOptions={{ margin: "0px 0px -350px 0px" }}
    >
      <div>
        <p>Coming soon...</p>
      </div>
    </InView>
  );
}
