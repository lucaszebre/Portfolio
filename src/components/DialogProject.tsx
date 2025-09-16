"use client";

import { getComments } from "@/actions/comments/getComments";
import { postComments } from "@/actions/comments/postComment";
import { PostCommentSchema } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import MarkdownPreview from "@uiw/react-markdown-preview";
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
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const queryClient = useQueryClient();

  const Comments = useQuery({
    queryFn: async () => {
      const comments = await getComments(id);
      setAllComments(comments);
      return comments;
    },
    queryKey: [`project-${id}`],
    enabled: true,
  });

  const postCommentMutation = useMutation({
    mutationFn: async (content: string) => {
      setIsLoading(true);
      await postComments({ id: crypto.randomUUID(), postId: id, content });
      setIsLoading(false);
    },
    onSuccess: async () => {
      form.reset({
        content: "",
      });
      queryClient.invalidateQueries({ queryKey: [`project-${id}`] });
      setIsLoading(false);
    },
    onError: async () => {
      setIsLoading(false);
      toast.error("Could not create the comment");
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

  const [allComments, setAllComments] = useState(Comments.data ?? []);

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
                <Dialog.Panel className=" h-[80%] w-[80%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2">
                    <MarkdownPreview source={readme} />
                  </div>

                  <div>
                    <h1 className="font-bold text-xl">COMMENTS</h1>
                    {allComments && allComments.length ? (
                      <ScrollArea className="h-[200px] w-full gap-8 rounded-md border p-8">
                        {allComments.map((comment) => (
                          <CommentCard
                            key={comment.id}
                            content={comment.content}
                            avatar={comment.User?.avatar ?? ""}
                            userName={comment.User?.UserName ?? "user"}
                          />
                        ))}
                      </ScrollArea>
                    ) : (
                      <div className="w-full">
                        <span className="bg-slate-400 text-white w-full">
                          I got no comments be the first to critisize my project
                          -ç-
                        </span>
                      </div>
                    )}

                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col items-end mt-[1em] border"
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
                                  placeholder="Tell me what you think about my project"
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
                          className="mt-[1em] hover:text-white text-black font-bold bg-none bg-transparent outline-0 border-0 cursor-pointe underline "
                        >
                          {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                          )}
                          ADD Comment
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
                        See the code
                      </a>
                    )}
                    {demo && (
                      <a
                        href={demo}
                        target="_blank"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        See the demo
                      </a>
                    )}
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
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
