import { z } from "zod";

export const SchemaContact = z.object({
    email: z.string({message:'Should be a string'}).email({message:'The email is not in the good format'}).min(1, { message: 'Need a username' }),
    name: z.string().min(1, { message: 'Need a name' }),
    message: z.string().min(1, { message: 'Need a message' })
  });

  
export const SchemaLogin = z.object({
  email: z.string().min(1, { message: 'Need a username' }),
  password: z.string().min(8, { message: 'At least 8 characters long' })
    .regex(/[A-Za-z]/, { message: 'Must contain at least one letter' })
    .regex(/[0-9]/, { message: 'Must contain at least one digit' })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'At least one special character' }),
});


export const SchemaRegister = z.object({
  email: z.string().email().min(1, { message: 'Need an email' }),
  name: z.string().min(1, { message: 'Need a first name' }),
  password: z.string().min(8, { message: 'At least 8 characters long' })
    .regex(/[A-Za-z]/, { message: 'Must contain at least one letter' })
    .regex(/[0-9]/, { message: 'Must contain at least one digit' })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'At least one special character' }),
});



export const skills = [
  "CSS",
  "PHP",
  "Laravel",
  "Symfony",
  "React native",
  "WordPress",
  "HTML",
  "JS",
  "REACT",
];