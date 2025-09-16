"use server";

import { prisma } from "@/config/db";

export async function getComments(postId?: string) {
  const comments = await prisma.comment.findMany({
    where: { postId },
    include: {
      User: true,
    },
  });

  return comments;
}
