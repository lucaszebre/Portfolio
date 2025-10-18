"use client";

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import { Button } from "@/components/ui/button";
import { CV_ENGLISH_LINK, CV_FRENCH_LINK } from "@/constant/cvLinks";
import { SchemaContact } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import frontend from "../../public/assets/images/icon-frontend-mentor.svg";
import github from "../../public/assets/images/icon-github.svg";
import linkedin from "../../public/assets/images/icon-linkedin.svg";
import twitter from "../../public/assets/images/icon-twitter.svg";
import Reveal from "./Reveal";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { z } from "zod";
import { Icons } from "./icons";

export const Bottom = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const t = useTranslations("Bottom");

  const form = useForm<z.infer<typeof SchemaContact>>({
    resolver: zodResolver(SchemaContact),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SchemaContact>) {
    setIsLoading(true);

    const data = await axios
      .post("/api/send", {
        email: values.email,
        name: values.name,
        message: values.message,
      })
      .then(function (response) {
        toast.success(t("toasts.success"));
        form.reset({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(function (error) {
        toast.error(t("toasts.error"));
      });

    setIsLoading(false);
  }

  return (
    <>
      <Toaster />
      <div
        id="bottom-container"
        className=" w-full h-full py-10 flex flex-col justify-center items-center bg-[#242424] relative"
      >
        <div className="absolute z-10 lg:top-[14vw] md:top-[39vw]  max-md:top-[50vw] max-md:left-[-20rem] left-[-4rem]">
          <Image
            fill={true}
            src={"./assets/images/pattern-rings.svg"}
            alt={t("alt.backgroundPattern")}
            loading="lazy"
          />
        </div>

        <div className="lg:w-[80%] md:w-full max-w-[1440px] h-full flex lg:flex-row lg:justify-between md:items-center md:justify-center mb-[2em] flex-col max-md:w-[90%]">
          <div className="hidden lg:flex">
            <Reveal
              width="100%"
              justifyContent="center"
              display="flex"
              v={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="lg:w-[30%] md:w-[85%] md:items-center max-md:items-center max-md:w-full h-full flex flex-col justify-center lg:items-start ">
                <div className="mb-[1rem] text-start text-white text-[7vw] font-bold">
                  {t("title")}
                </div>
                <div className="md:text-center md:items-center md:text-[2vw] text-[2.8vw] text-white lg:text-[1vw] mb-[1rem] font-thin lg:text-start ">
                  {t("description")}
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:hidden flex">
            <Reveal
              width="100%"
              justifyContent="center"
              display="flex"
              v={{
                hidden: {
                  opacity: 0,
                  x: -75,
                  display: "flex",
                  justifyContent: "center",
                },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="lg:w-[30%] md:w-[85%] md:items-center max-md:items-center max-md:w-full h-full flex flex-col justify-center lg:items-start ">
                <div className="mb-[1rem] text-start text-white text-[7vw] font-bold">
                  {t("title")}
                </div>
                <div className="md:text-center md:items-center md:text-[2vw] text-[2.8vw] text-white lg:text-[1vw] mb-[1rem] font-thin lg:text-start ">
                  {t("description")}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col max-md:items-center">
            <Reveal
              v={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {/* //  FOrmulaire */}

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col items-end mt-[1em]"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            {...field}
                            className="w-[85vw] lg:w-[30vw] mb-[1.5em] text-white border-white border-b-[1px] h-[5vw] outline-0 bg-none bg-transparent"
                            type="text"
                            placeholder={t("form.name")}
                            id="name-input"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-col items-start content-start w-full">
                        {/* <FormLabel className="text-start w-full" >Email</FormLabel> */}
                        <FormControl>
                          <Input
                            className="w-[85vw] lg:w-[30vw] mb-[1.5em] text-white border-white border-b-[1px] h-[5vw] outline-0 bg-none bg-transparent"
                            placeholder={t("form.email")}
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="flex-col items-start content-start w-full">
                        {/* <FormLabel className="text-start w-full" >Message</FormLabel> */}
                        <FormControl>
                          <Input
                            className="w-[85vw] lg:w-[30vw] mb-[1.5em] text-white border-white border-b-[1px] h-[5vw] outline-0 bg-none bg-transparent"
                            placeholder={t("form.message")}
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="mt-[1em] text-white  font-bold bg-none bg-transparent outline-0 border-0 cursor-pointe underline decoration-[#0bd949] decoration-4 text-[3vw]"
                  >
                    {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {t("form.submit")}
                  </Button>
                </form>
              </Form>
            </Reveal>
          </div>
        </div>

        <div className="md:mt-[4em] w-[85%] max-w-[1440px] lg:w-[80%] flex-row items-center justify-between border-white border-t-[1px]  max-md:mt-[2em] flex ">
          <Reveal
            v={{
              hidden: { opacity: 0, y: 175 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="max-md:text-[1rem] lg:mb-0 text-white lg:text-[2vw] font-bold mb-[1em] md:text-[3vw]">
              lucaszebre
            </div>
          </Reveal>

          <Reveal
            v={{
              hidden: { opacity: 0, y: 175 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex flex-row justify-between gap-2">
              <a href="https://github.com/lucaszebre" target="_blank">
                <Image
                  src={github}
                  alt={t("alt.github")}
                  className="max-md:w-[3vw] mr-[1vw] max-md:min-w-[19.2px] md:w-[3vw] lg:w-[2vw]"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.frontendmentor.io/profile/Kihura"
                target="_blank"
              >
                <Image
                  src={frontend}
                  alt={t("alt.frontend")}
                  className="max-md:w-[3vw] mr-[1vw] max-md:min-w-[19.2px] md:w-[3vw] lg:w-[2vw]"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-zebre-22305a191/"
                target="_blank"
              >
                <Image
                  src={linkedin}
                  alt={t("alt.linkedin")}
                  className="max-md:w-[3vw] mr-[1vw] max-md:min-w-[19.2px] md:w-[3vw] lg:w-[2vw]"
                  loading="lazy"
                />
              </a>
              <a href="https://twitter.com/ZebreLucas" target="_blank">
                <Image
                  src={twitter}
                  alt={t("alt.twitter")}
                  className="max-md:w-[3vw] mr-[1vw] max-md:min-w-[19.2px] md:w-[3vw] lg:w-[2vw]"
                  loading="lazy"
                />
              </a>
              <a
                className="text-2xl text-white font-bold"
                href={t("lang") === "FR" ? CV_FRENCH_LINK : CV_ENGLISH_LINK}
                target="_blank"
              >
                CV
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
};
