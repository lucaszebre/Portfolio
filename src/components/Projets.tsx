"use client";

import { ALL_PROJECTS } from "@/constant/projects/index";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { DialogProject } from "./DialogProject";
import Reveal from "./Reveal";
const Projets = () => {
  const t = useTranslations("Projects");

  const locale: "en" | "fr" = t("lang") === "FR" ? "fr" : "en";
  return (
    <div className="flex flex-col items-center  justify-center w-full">
      <div className="mt-[5vw]  max-w-[1440px] md:w-[80%] w-[90%] flex flex-col justify-center items-center">
        <div className="flex flex-col  justify-center items-center w-full ">
          <div className="flex items-end justify-between w-full">
            <Reveal
              v={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h1 className="text-white text-xl md:text-6xl font-semibold">
                {t("title")}
              </h1>
            </Reveal>

            <Reveal
              v={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="md:text-4xl text-lg text-white underline decoration-4 decoration-[#07ff6a] cursor-pointer ">
                {t("contactMe")}
              </div>
            </Reveal>
          </div>
          <div className="flex flex-col items-start gap-10 lg:flex-row mt-[5vw] mb-[5vw] justify-between w-full">
            {ALL_PROJECTS.slice(0, 2).map(
              ({ readme, id, demo, image, alt, tags, name, code }) => {
                return (
                  <DialogProject
                    id={id}
                    key={id}
                    code={code}
                    readme={readme[locale]}
                    demo={demo}
                  >
                    <Reveal
                      v={{
                        hidden: { opacity: 0, y: 175, width: "100%" },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <div className="flex flex-col cursor-pointer w-full relative rounded-3xl rounded-gray-300 items-start justify-start">
                        <div className=" w-full relative h-[20rem]">
                          <Image
                            className="rounded-xl "
                            fill
                            src={image}
                            alt={alt}
                          />
                        </div>
                        <div className="text-[4vw] font-300 gap-3 flex flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] "'
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-[5vw]  md:text-[2.5vw] lg:text-[1.7vw] font-bold text-white mt-[0.5rem]">
                          {name}{" "}
                        </h2>
                      </div>
                    </Reveal>
                  </DialogProject>
                );
              }
            )}
          </div>{" "}
          <div className="flex flex-col items-start gap-10 lg:flex-row mt-[5vw] mb-[5vw] justify-between w-full">
            {ALL_PROJECTS.slice(2, 4).map(
              ({ readme, id, demo, image, alt, tags, name, code }) => {
                return (
                  <DialogProject
                    id={id}
                    key={id}
                    code={code}
                    readme={readme[locale]}
                    demo={demo}
                  >
                    <Reveal
                      v={{
                        hidden: { opacity: 0, y: 175, width: "100%" },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <div className="flex flex-col cursor-pointer w-full relative rounded-3xl rounded-gray-300 items-start justify-start">
                        <div className=" w-full relative h-[20rem]">
                          <Image
                            className="rounded-xl"
                            fill
                            src={image}
                            alt={alt}
                          />
                        </div>
                        <div className="text-[4vw] font-300 gap-3 flex flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] "'
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-[5vw]  md:text-[2.5vw] lg:text-[1.7vw] font-bold text-white mt-[0.5rem]">
                          {name}{" "}
                        </h2>
                      </div>
                    </Reveal>
                  </DialogProject>
                );
              }
            )}
          </div>
          <div className="flex flex-col items-start gap-10 lg:flex-row mt-[5vw] mb-[5vw]  justify-between w-full">
            {ALL_PROJECTS.slice(4, 6).map(
              ({ readme, id, demo, image, alt, tags, name, code }) => {
                return (
                  <DialogProject
                    id={id}
                    key={id}
                    code={code}
                    readme={readme[locale]}
                    demo={demo}
                  >
                    <Reveal
                      v={{
                        hidden: { opacity: 0, y: 175, width: "100%" },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <div className="flex flex-col cursor-pointer w-full relative rounded-3xl rounded-gray-300 items-start justify-start">
                        <div className=" w-full relative h-[20rem]">
                          <Image
                            className="rounded-xl"
                            fill
                            src={image}
                            alt={alt}
                          />
                        </div>
                        <div className="text-[4vw] font-300 gap-3 flex flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] "'
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-[5vw]  md:text-[2.5vw] lg:text-[1.7vw] font-bold text-white mt-[0.5rem]">
                          {name}{" "}
                        </h2>
                      </div>
                    </Reveal>
                  </DialogProject>
                );
              }
            )}
          </div>
          <div className="flex flex-col items-start gap-10 lg:flex-row mt-[5vw] mb-[5vw]  justify-between w-full">
            {ALL_PROJECTS.slice(6, 8).map(
              ({ readme, id, demo, image, alt, tags, name, code }) => {
                return (
                  <DialogProject
                    id={id}
                    key={id}
                    code={code}
                    readme={readme[locale]}
                    demo={demo}
                  >
                    <Reveal
                      v={{
                        hidden: { opacity: 0, y: 175, width: "100%" },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <div className="flex flex-col cursor-pointer w-full relative rounded-3xl rounded-gray-300 items-start justify-start">
                        <div className=" w-full relative h-[20rem]">
                          <Image
                            className="rounded-xl"
                            fill
                            src={image}
                            alt={alt}
                          />
                        </div>
                        <div className="text-[4vw] font-300 gap-3 flex flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] "'
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-[5vw]  md:text-[2.5vw] lg:text-[1.7vw] font-bold text-white mt-[0.5rem]">
                          {name}{" "}
                        </h2>
                      </div>
                    </Reveal>
                  </DialogProject>
                );
              }
            )}
          </div>
          <div className="flex flex-col items-start gap-10 lg:flex-row mt-[5vw] mb-[5vw]  justify-between w-full">
            {ALL_PROJECTS.slice(8, 10).map(
              ({ readme, id, demo, image, alt, tags, name, code }) => {
                return (
                  <DialogProject
                    id={id}
                    key={id}
                    code={code}
                    readme={readme[locale]}
                    demo={demo}
                  >
                    <Reveal
                      v={{
                        hidden: { opacity: 0, y: 175, width: "100%" },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <div className="flex flex-col cursor-pointer w-full relative rounded-3xl rounded-gray-300 items-start justify-start">
                        <div className=" w-full relative h-[20rem]">
                          <Image
                            className="rounded-xl"
                            fill
                            src={image}
                            alt={alt}
                          />
                        </div>
                        <div className="text-[4vw] font-300 gap-3 flex flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] "'
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-[5vw]  md:text-[2.5vw] lg:text-[1.7vw] font-bold text-white mt-[0.5rem]">
                          {name}{" "}
                        </h2>
                      </div>
                    </Reveal>
                  </DialogProject>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projets;
