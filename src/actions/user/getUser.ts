"use server";

import { auth } from "@/auth";
import { prisma } from "@/config/db";
import { headers } from "next/headers";

export async function getUser(email?: string) {
  try {
    if (email) {
      const user = await prisma.user.findUnique({
        where: { email: email },
      });

      return user;
    }

    const currentHeaders = headers();
    const session = await auth.api.getSession({
      headers: currentHeaders,
    });
    if (!session?.user?.email) {
      throw new Error("not auth");
    }

    // Check if the history entry exists

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    return user;
  } catch (error) {
    console.error("Error saving letter:", error);
  }
}
