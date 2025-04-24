import { getTopEntries } from "../scrapers/top";
import { TopEntry } from "../structures/main/TopEntry";
import { proxiedRequest } from "../utils/request";
import { splitData } from "../utils/split-data";

/**
 * Fetch top entries given a route from UniversoCraft. `head` and `skin` URLs are only available for the top 5 due to how the top page was made. Returns a `Promise` with an array of the `TopEntry` object with the information, or null if it was not found.
 * @param { string } route Page route where to fetch top entries from.
 * It's recommended/intented to use the exported constant `TopRoutes` to find a route to fetch from.
 * Either way, you can pass one manually
 * @param { number } page Top page number, must be between 1 and 20. Defaults to **1**
 * @example fetchTop(TopRoutes.BedWars.Wins)
 * @example fetchTop(TopRoutes.SkyWars.Kills)
 * @example fetchTop("uhc/kills", 2)
 * @returns { Promise<TopQuery | null> } The top information on succeed. Throws an error if the `page` argument is invalid, when the page doesn't return any data or when the `fetch` fails
 */
export async function fetchTop(route: string, page?: number): Promise<TopEntry[]> {
    if ((page ?? 1) < 1 || (page ?? 1) > 20) {
        throw new Error("Page must be a number between 1 and 20.");
    }

    const data = await proxiedRequest(
        `/tops/${route}/?page=${encodeURIComponent(page ?? 1)}`
    );

    if (!data.trim()) {
        throw new Error(
            "Page didn't return any data. Maybe you're getting rate-limited."
        );
    }

    if (data.includes("404 ERROR") || data.includes("Server Error")) {
        throw new Error("Invalid provided arguments. URL didn't work.");
    }

    const serialized = splitData(data);
    return getTopEntries(serialized);
}
