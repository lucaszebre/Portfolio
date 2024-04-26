import { z } from "zod";

export const SchemaContact = z.object({
    email: z.string({message:'Should be a string'}).email({message:'The email is not in the good format'}).min(1, { message: 'Need a username' }),
    name: z.string().min(1, { message: 'Need a name' }),
    message: z.string().min(1, { message: 'Need a message' })
  });