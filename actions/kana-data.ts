import { createClient } from "@/utils/supabase/server";

export async function kanaData() {
  const supabase = await createClient();

  let { data: kana, error } = await supabase
    .from("kana")
    .select("*")
    .eq("special", false)
    .order("rank")
    .order("romaji");

  return kana;
}