"use client";

import { getComments } from "@/actions/comments/getComments";
import { postComments } from "@/actions/comments/postComment";
import { PostCommentSchema } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useTranslations } from "next-intl";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { CommentCard } from "./commentCard";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { ScrollArea } from "./ui/scroll-area";
import { Textarea } from "./ui/textarea";
type DialogProjectProps = {
  children: React.ReactNode;
  readme?: string;
  code?: string;
  demo?: string;
  id: string;
};

export const DialogProject = ({
  children,
  readme,
  code,
  demo,
  id,
}: DialogProjectProps) => {
  const t = useTranslations("DialogProject");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const queryClient = useQueryClient();

  const { data: comments, isLoading: commentsLoading } = useQuery({
    queryKey: [`project-${id}`],
    queryFn: () => getComments(id),
  });

  const postCommentMutation = useMutation({
    mutationFn: async (content: string) => {
      setIsLoading(true);
      await postComments({ id: crypto.randomUUID(), postId: id, content });
    },
    onSuccess: () => {
      form.reset({ content: "" });
      queryClient.invalidateQueries({ queryKey: [`project-${id}`] });
      setIsLoading(false);
    },
    onError: () => {
      setIsLoading(false);
      toast.error(t("toast.errorCreateComment"));
    },
  });

  const form = useForm<z.infer<typeof PostCommentSchema>>({
    resolver: zodResolver(PostCommentSchema),
    defaultValues: {
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof PostCommentSchema>) {
    postCommentMutation.mutate(values.content);
  }

  return (
    <>
      <div onClick={openModal} className="w-full">
        {children}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" h-[80%] w-[80%] flex flex-col gap-4 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2">
                    <MarkdownPreview source={readme} />
                  </div>

                  <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-xl underline">
                      {t("comments.title")}
                    </h1>
                    {commentsLoading ? (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    ) : comments && comments.length > 0 ? (
                      <ScrollArea className="h-[200px] w-full  rounded-md  p-8">
                        <div className="flex flex-col gap-8">
                          {comments.map((comment) => (
                            <CommentCard
                              key={comment.id}
                              content={comment.content}
                              avatar={comment.User?.image ?? ""}
                              userName={comment.User?.name ?? "user"}
                              createdAt={comment.createdAt}
                            />
                          ))}
                        </div>
                      </ScrollArea>
                    ) : (
                      <div className="w-full">
                        <span className="bg-slate-400 text-white w-full">
                          {t("comments.noComments")}
                        </span>
                      </div>
                    )}

                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col items-end mt-[1em] "
                      >
                        <FormField
                          control={form.control}
                          name="content"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormControl>
                                <Textarea
                                  {...field}
                                  className="w-full mb-[1.5em] text-black border-white border-b-[1px] h-[5vw] outline-0 bg-none bg-transparent"
                                  placeholder={t("comments.placeholder")}
                                  id="name-input"
                                  maxLength={300}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          className=" font-bold  cursor-pointer  "
                        >
                          {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                          )}
                          {t("comments.addButton")}
                        </Button>
                      </form>
                    </Form>
                  </div>

                  <div className="mt-4 flex flex-row gap-4">
                    {code && (
                      <a
                        href={code}
                        target="_blank"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        {t("buttons.seeCode")}
                      </a>
                    )}
                    {demo && (
                      <a
                        href={demo}
                        target="_blank"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        {t("buttons.seeDemo")}
                      </a>
                    )}
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      {t("buttons.close")}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
