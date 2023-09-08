import { filterIndexes } from "../utils/array-related";
import { Player } from "../structures/main/Player";
import { Rank, availableRanks } from "../structures/misc/Rank";
import { Tag } from "../structures/misc/TagInfo";
import { RGBColorTuple } from "../structures/misc/RGBColorTuple";

export function getPlayerInfo(serialized: string[]): Player {

    const username = serialized.at(
        serialized.findIndex(e => e.includes(`<div class="player-name">`)) + 2
    ) ?? "";

    const head = serialized.at(
        serialized.findIndex(e => e.includes(`<div class="player-image-border">`)) + 1
    )?.match(/https:\/\/.+"\s/g)?.at(0)?.slice(0, -2) ?? "";

    const skin = ((): string => {
        try {
            return new URL(head).searchParams.get("url") ?? "";
        } catch (err) {}
        return "";
    })();

    const ranks = serialized.filter((e) => {
        return e.includes(`<div class="player-status-block`);
    }).map(data => {
        return availableRanks.find(rank => data.includes(rank))
    }).filter(e => e) as Rank[];
    
    const tags = (() => {
        const startIndex = serialized.findIndex(e => e.includes(`<div class="player-tag">`));
        const data = serialized.slice(
            startIndex,
            serialized.findIndex((e, index) => e.includes("</div>") && index > startIndex)
        );
        const indexes = filterIndexes(data, (e: string) => {
            return e.startsWith("<p style=")
        });
        return indexes.map((index): Tag => {
            return {
                color: (data
                .at(index)
                ?.match(/rgb\([0-9]+(| +),(| +)+[0-9]+(| +),(| +)[0-9]+\)/g)
                ?.at(0)
                ?.split(",")
                .map((value) => {
                    return parseInt(value.match(/\d+/g)?.at(0) ?? "0");
                }) || []) as RGBColorTuple,
                name: data[index + 1]
            }
        })
    })();

    return { username, head, skin, ranks, tags }

}