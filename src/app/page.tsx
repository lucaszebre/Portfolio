"use client";
import { getUser } from "@/actions/user/getUser";
/* eslint-disable react/jsx-no-undef */
import { Bottom } from "@/components/Bottom";
import Press from "@/components/Press";
import Projets from "@/components/Projets";
import Skill from "@/components/Skill";
import Top from "@/components/Top";
import Youtube from "@/components/Youtube";
import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { useHover } from "usehooks-ts";

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
      <Top user={currentUser.data} onClick={scrollTo} />

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
