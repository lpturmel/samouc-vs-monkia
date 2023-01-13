import { Show } from "solid-js";
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import UserBanner from "~/components/UserBanner";
import { CharRes } from "~/lib/response";

export const routeData = () => {
    return createServerData$(async () => {
        const samoucRes = fetch("https://raider.io/api/v1/characters/profile?region=us&realm=zuljin&name=samouc&fields=gear,mythic_plus_scores_by_season:current,mythic_plus_ranks");
        const monkiaRes = fetch("https://raider.io/api/v1/characters/profile?region=us&realm=zuljin&name=monkia&fields=gear,mythic_plus_scores_by_season:current,mythic_plus_ranks");
        const [samouc, monkia] = await Promise.all([samoucRes, monkiaRes]);

        return {
            samouc: await samouc.json() as CharRes,
            monkia: await monkia.json() as CharRes,
        };
    });
}
const getKing = (a: number, b: number) => {
    if (a > b) return "Samouc";
    if (a < b) return "Monkia";
    return "tie";
}
export default function Home() {
    const data = useRouteData<typeof routeData>();
  return (
    <main class="container mx-auto max-w-md pt-40">
        <h1 class="font-bold text-accent text-3xl my-10"> ULTIMATE MONK SHOWDOWN </h1>
        <Show when={data()}>
            <UserBanner user={data()?.samouc!} />
             <div class="divider"></div>
            <UserBanner user={data()?.monkia!} />
             <div class="divider"></div>
             <div>
                <p class="font-bold text-3xl w-full text-center"> 👑 current winner: {getKing(data()?.samouc.mythic_plus_scores_by_season[0].scores.all!, data()?.monkia.mythic_plus_scores_by_season[0].scores.all!)}</p>
             </div>
        </Show>

    </main>
  );
}
