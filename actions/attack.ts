"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function attack(id: number, pro: any) {
  const supabase = createClient();

  // let { data: pro } = await supabase
  //   .from("pro")
  //   .select("*")
  //   .eq("user_id", "44df6dcf-da1a-4ded-b117-9d317bacdca0")
  //   .limit(1)
  //   .single();

  await supabase
    .from("pro")
    .update({ reviews: pro.reviews.filter((item: any) => item !== id) })
    .eq("user_id", "44df6dcf-da1a-4ded-b117-9d317bacdca0")
    .select();

  revalidatePath("/", "layout");
  redirect("/anki");
}
