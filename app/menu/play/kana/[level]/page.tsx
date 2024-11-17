import { EnemyCard } from "@/components/enemy-card";
import { PlayerHp } from "@/components/player-hp";
import { createClient } from "@/utils/supabase/server";

const Level = async ({ params }: { params: Promise<{ kana: string }> }) => {
  const supabase = await createClient();

  let { data: profiles } = await supabase
    .from("profiles")
    .select("*")
    .limit(1)
    .single();

  const { data } = await supabase
    .from("kana")
    .select("*")
    .eq("level", profiles.level);

  return (
    <div className="flex-1 relative z-10 flex justify-center">
      <EnemyCard data={data} />

      <PlayerHp />
    </div>
  );
};

export default Level;