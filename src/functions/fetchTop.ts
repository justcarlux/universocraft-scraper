import { getTopEntriesInfo } from "../scrapers/top";
import { TopEntry } from "../structures/main/TopEntry";
import { baseURL } from "../utils/constants";
import { splitData } from "../utils/split-data";

interface FetchTopOptions {
    /** Page route where to fetch top entries from.
     * It's recommended/intented to use the exported constant `TopRoutes` to find a route to fetch from.
     * Either way, you can pass one manually 
     * @example fetchTop({ route: TopRoutes.BedWars.Wins })
     * @example fetchTop({ route: TopRoutes.SkyWars.Kills })
     * @example fetchTop({ route: "uhc/kills" }) */
    route: string,
    /** Top page number. Defaults to **1** */
    page?: number
}

/**
 * Fetch top entries given a route from UniversoCraft. Returns a `Promise` with an array of the `TopEntry` object with the information, or null if it was not found.
 * @param { GetTopEntriesOptions } options Options for the function
 * @returns { Promise<TopQuery | null> } The top information on succeed. Throws an error if something happens while getting the information
*/
export async function fetchTop(options: FetchTopOptions): Promise<TopEntry[]> {

    if (
        (options.page ?? 1) < 1 || (options.page ?? 1) > 20
    ) {
        throw new Error("Page must be a number between 1 and 20.")
    }

    const data = await (
        await fetch(`${baseURL}/tops/${options.route}/${options.page ?? 1}`)
    ).text();
    
    if (!data.trim()) {
        throw new Error("Page didn't return any data. Maybe you're getting rate-limited.");
    }

    if (
        data.includes("Se podrán ver los tops globales de cada modalidad.")
    ) {
        throw new Error("Invalid provided arguments. URL didn't work.");
    }

    const serialized = splitData(data);
    return getTopEntriesInfo(serialized);

}