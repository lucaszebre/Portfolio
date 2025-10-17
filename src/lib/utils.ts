import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFirstLetters(avatar: string) {
  if (!avatar) {
    return [""];
  }
  const [firstName, lastName] = avatar.split(" ");
  if (lastName) {
    return [firstName.charAt(0), lastName.charAt(0)];
  }
  return [firstName.charAt(0)];
}
