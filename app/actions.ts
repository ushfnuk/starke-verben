'use server';
import { revalidateTag } from "next/cache";

export async function revalidateWords() {
  revalidateTag('words');
}
