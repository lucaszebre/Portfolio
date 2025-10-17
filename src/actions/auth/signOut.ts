"use server";

import { cookies } from "next/headers";

export async function signOutAction() {
  const cookieStore = cookies();

  cookieStore.delete("better-auth.session_token");
  cookieStore.delete("better-auth.state");
  cookieStore.delete("refreshToken");
}
