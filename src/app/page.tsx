"use client";
import { getUser } from "@/actions/user/getUser";
/* eslint-disable react/jsx-no-undef */
import Press from "@/components/Press";
import Top from "@/components/Top";
import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { useHover } from "usehooks-ts";

// Lazy load components below the fold
const Bottom = dynamic(
  () => import("@/components/Bottom").then((mod) => ({ default: mod.Bottom })),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);
const Skill = dynamic(() => import("@/components/Skill"), {
  loading: () => <div className="min-h-[200px]" />,
});
const Youtube = dynamic(() => import("@/components/Youtube"), {
  loading: () => <div className="min-h-[700px]" />,
});
const Projets = dynamic(() => import("@/components/Projets"), {
  loading: () => <div className="min-h-[800px]" />,
});

export default function Home() {
  const bottom = useRef<HTMLDivElement>(null);
  const project = useRef<HTMLDivElement>(null);

  function scrollTo(ref: string) {
    if (ref === "contact") {
      if (bottom && bottom.current) {
        console.log("here");
        bottom.current.scrollIntoView({ behavior: "smooth" });
      }
    } else if (ref === "projects") {
      if (project && project.current) {
        project.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  const isHover = useHover(bottom);

  const currentUser = useQuery({
    queryFn: async () => {
      const user = (await getUser()) as User;
      return user;
    },
    queryKey: ["user"],
    enabled: true,
  });

  return (
    <>
      <Press isHover={isHover} />
      <Top onClick={scrollTo} />

      <Skill />
      <div className="w-full " ref={project}>
        <Youtube />
        <Projets />
        {/* <CalltoAction /> */}
      </div>
      <div className="w-full" ref={bottom}>
        <Bottom />
      </div>
    </>
  );
}
