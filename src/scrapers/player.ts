import { filterIndexes } from "../utils/array-related";
import { Player } from "../structures/main/Player";
import { Rank } from "../structures/misc/Rank";
import { Tag } from "../structures/misc/Tag";
import { RGBColorTuple } from "../structures/misc/RGBColorTuple";
import { parseLastSeenTimeString, parseSkinData } from "./util";

export function getPlayerInfo(serialized: string[]): Player {

    const username = serialized.at(
        serialized.findIndex(e => e.includes(`class="ProfileName"`)) + 2
    ) as string;

    const { head, skin } = parseSkinData(serialized.at(
        serialized.findIndex(e => e.includes(`<meta property="og:image"`))
    ) as string) as { head: string, skin: string }

    const lastSeen = (() => {
        const text = serialized.at(
            serialized.findIndex(e => e.includes(`Última Conexión`)) + 3
        ) ?? "";
        return parseLastSeenTimeString(text, "\n");
    })();
    
    const ranks = filterIndexes(serialized, (element) => element.includes(`<span class="ProfileTag `))
    .map(e => serialized[e + 1].split(" ")[0].trim().toLowerCase()) as Rank[];

    const tags = (() => {
        const indexes = filterIndexes(serialized, (e) => e.includes(`<div class="ProfilePlayerTag `));
        return indexes.map((index): Tag => {
            return {
                name: serialized[index + 1],
                color: (serialized
                .at(index)
                ?.match(/rgb\([0-9]+(| +),(| +)+[0-9]+(| +),(| +)[0-9]+\)/g)
                ?.at(0)
                ?.split(",")
                .map((value) => {
                    return parseInt(value.match(/\d+/g)?.at(0) ?? "0");
                }) || []) as RGBColorTuple
            }
        })
    })();
    
    const profileStats = filterIndexes(serialized, (e) => e.includes(`<div class="ProfileStat">`));
    const lastVersion = serialized[
        serialized.slice(profileStats[0]).findIndex(e => e.includes(`ProfileStat__Value`)) + profileStats[0] + 1
    ];
    const firstConnection = parseLastSeenTimeString(
        serialized[
            serialized.slice(profileStats[1]).findIndex(e => e.includes(`ProfileStat__Value`)) + profileStats[1] + 1
        ], "-"
    ) as Date;
    const friends = parseInt(
        serialized[
            serialized.slice(profileStats[2]).findIndex(e => e.includes(`ProfileStat__Value`)) + profileStats[2] + 1
        ]
    );
    
    return { username, head, skin, ranks, tags, lastConnection: lastSeen, lastVersion, firstConnection, friends };

}