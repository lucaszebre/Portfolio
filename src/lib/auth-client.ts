import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient();

export const $fetchWithClient = authClient.$fetch;
