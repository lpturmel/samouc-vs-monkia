import { Component, createSignal, onMount } from "solid-js";
import colors from "~/lib/colors";
import { CharRes } from "~/lib/response";

interface Props {
    user: CharRes
}
export function inRange(x: number, min: any, max: any) {
    return (x - min) * (x - max) <= 0;
}

const UserBanner: Component<Props> = (props) => {
    const score = props.user.mythic_plus_scores_by_season[0].scores.all;
    const [scoreColor, setScoreColor] = createSignal("");
    onMount(() => {
        renderColor(score);
    });
    const renderColor = (score: number) => {
            colors.forEach((color, index) => {
        if (
            inRange(
                Math.round(score),
                color.score,
                colors[index + 1] ? colors[index + 1].score : 0
            )
        ) {
            setScoreColor(color.rgbHex);
        }
    });
    }
    return (
        <div class="flex flex-col gap-2 bg-base-200 rounded-md p-4 w-full">
            <div class="flex w-full items-center gap-4">
                <img alt={props.user.name} src={props.user.thumbnail_url} class="rounded-full" />
                <div class="flex justify-between w-full items-center">
                    <a href={`https://raider.io/characters/us/zuljin/${props.user.name}`} target="_blank" class="text-lg font-semibold hover:text-accent transition-colors duration-150"> {props.user.name} </a>
                    <p> <span style={{ "color": scoreColor()}} class="font-semibold bg-base-300 rounded-md p-2">{Math.round(score)}</span> </p>
                    <p class="font-bold"> {props.user.gear.item_level_equipped} ilvl </p>
                </div>
            </div>
              <table class="table w-full">
    <thead>
      <tr>
        <th>Realm</th>
        <th>Realm (faction)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{props.user.mythic_plus_ranks.class?.realm}</td>
        <td>{props.user.mythic_plus_ranks.faction_class?.realm}</td>
      </tr>
    </tbody>
  </table>
        </div>
    )
}

export default UserBanner;
