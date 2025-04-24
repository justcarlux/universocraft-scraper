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

    const { head, skin } = parseSkinData(
        serialized.at(
            serialized.findIndex(e => e.includes(`<meta property="og:image"`))
        ) as string
    ) as { head: string; skin: string };

    const lastSeen = (() => {
        const text =
            serialized.at(serialized.findIndex(e => e.includes(`Última Conexión`)) + 3) ??
            "";
        return parseLastSeenTimeString(text, "\n");
    })();

    const ranks = filterIndexes(serialized, element =>
        element.includes(`<span class="ProfileTag `)
    ).map(e => serialized[e + 1].split(" ")[0].trim().toLowerCase()) as Rank[];

    const tags = (() => {
        const indexes = filterIndexes(serialized, e =>
            e.includes(`<div class="ProfilePlayerTag `)
        );
        return indexes.map((index): Tag => {
            return {
                name: serialized[index + 1],
                color: (serialized
                    .at(index)
                    ?.match(/rgb\([0-9]+(| +),(| +)+[0-9]+(| +),(| +)[0-9]+\)/g)
                    ?.at(0)
                    ?.split(",")
                    .map(value => {
                        return parseInt(value.match(/\d+/g)?.at(0) ?? "0");
                    }) || []) as RGBColorTuple
            };
        });
    })();
    const profileStats = serialized.slice(
        serialized.findIndex(e => e.includes(`<div class="ProfileStats">`))
    );
    const lastVersion = (() => {
        const index = profileStats.findIndex(e => e.includes(`Última Versión`));
        if (index < 0) return null;
        return profileStats[index + 3];
    })();
    const firstConnection = (() => {
        const index = profileStats.findIndex(e => e.includes(`Primera Conexión`));
        if (index < 0) return null;
        return parseLastSeenTimeString(profileStats[index + 3], "-");
    })();
    const friends = (() => {
        const index = profileStats.findIndex(e => e.includes(`Amigos`));
        if (index < 0) return 0;
        return parseInt(profileStats[index + 3]);
    })();
    return {
        username,
        head,
        skin,
        ranks,
        tags,
        lastConnection: lastSeen,
        lastVersion,
        firstConnection,
        friends
    };
}
