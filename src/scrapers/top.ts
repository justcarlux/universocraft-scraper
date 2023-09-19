import { TopEntry } from "../structures/main/TopEntry";
import { filterIndexes } from "../utils/array-related";
import { baseURL } from "../utils/constants";

export function getTopEntriesInfo(serialized: string[]): TopEntry[] {
    const indexes = filterIndexes(serialized, (e) => {
        return e.includes(`<div class="player"`) || e.includes(`<div class="player `);
    });
    return indexes.map(index => {
        const slice = serialized.slice(index);
        const position = parseFloat(
            slice.at(
                slice.findIndex(e => e.includes(`<div class="player-position">`)) + 2
            ) ?? ""
        )
        const username = slice.at(
            slice.findIndex(e => e.includes(`<div class="player-name">`)) + 2
        ) ?? "";
        const value = parseFloat(
            slice.at(
                slice.findIndex(e => e.includes(`<div class="player-count">`)) + 2
            ) ?? "0"
        )
        const url = `${baseURL}${
            (() => {
                const data = slice.find(e => e.includes(`<a href=`));
                return data?.slice(data.indexOf("/"))?.slice(0, -2);
            })()
        }`;
        return { position, username, value, url }
    });
}