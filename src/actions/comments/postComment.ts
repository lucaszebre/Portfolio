"use server";

import { auth } from "@/auth";
import { prisma } from "@/config/db";
import { headers } from "next/headers";

export type PostCommentType = {
  id: string;
  postId: string;
  content: string;
};
export async function postComments({ id, postId, content }: PostCommentType) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user?.email) {
    throw new Error("not auth");
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });
    // Check if the history entry exists

    if (content.length > 300) {
      throw new Error("content is too long");
    }
    const createComment = await prisma.comment.create({
      data: {
        id,
        postId,
        content,
        userId: user?.id,
      },
    });

    return createComment;
  } catch (error) {
    console.error("Error creating comment:", error);
  }
}
