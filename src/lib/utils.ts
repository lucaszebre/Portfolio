import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFirstLetters(avatar: string) {
  const [firstName, lastName] = avatar.split(" ");
  console.log(firstName, lastName, "last");
  return [firstName.charAt(0), lastName.charAt(0)];
}
