import { TopEntry } from "../structures/main/TopEntry";
import { filterIndexes } from "../utils/array-related";
import { baseURL } from "../utils/constants";
import { parseSkinData } from "./util";

export function getTopEntries(serialized: string[]): TopEntry[] {
    const indexes = filterIndexes(serialized, e => {
        return e.includes(`<a href="/jugador/`);
    });
    return indexes.map(index => {
        const slice = serialized.slice(index);
        const position = parseFloat(
            slice
                .at(slice.findIndex(e => e.includes(`Locale__Number"`)) + 2)
                ?.replace("#", "") as string
        );
        const username = slice
            .at(
                slice.findIndex(
                    e => e.includes(`__PlayerName`) || e.includes(`"Locale__Description"`)
                ) + 2
            )
            ?.replace("#", "") as string;
        const value = parseFloat(
            slice.at(
                slice.findIndex(e => e.includes(`__Value`)) + (position <= 5 ? 1 : 2)
            ) ?? "0"
        );
        const url = `${baseURL}${(() => {
            const data = slice.find(e => e.includes(`<a href=`));
            return data
                ?.match(/\/jugador\/\w+"/g)
                ?.at(0)
                ?.slice(0, -1);
        })()}`;
        const { skin, head } = parseSkinData(
            slice
                .at(slice.findIndex(e => e.includes(`FirstLocale__Skull`)) + 1)
                ?.replace("#", "") as string
        );
        return { position, username, value, url, skin, head };
    });
}
