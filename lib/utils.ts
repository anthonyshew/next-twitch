import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const channelNameToUrlSafe = (str: string) => {
  return str.toLowerCase().replace(/ /g, "-");
};
