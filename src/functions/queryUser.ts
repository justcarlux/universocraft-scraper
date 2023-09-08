import { getPlayerInfo } from "../scrapers/player";
import { getPlayerStatistics } from "../scrapers/statistics";
import { UserQuery } from "../structures/main/UserQuery";
import { splitData } from "../utils/split-data";

/**
 * Fetch statistics and player information from UniversoCraft given an username. Returns a `Promise` with an `UserQuery` object with the player information, or null if it was not found.
 * @param {string} username Username of the player
 * @returns {Promise<UserQuery | null>} The information on succeed, or null if the player was not found. Throws an error if something happens while getting the information
*/
export async function queryUser(username: string): Promise<UserQuery | null> {

    const data = await (
        await fetch(`https://stats.universocraft.com/stats.php?player=${encodeURIComponent(username)}`)
    ).text();

    if (
        data.includes("<p>¡No se ha encontrado ningún usuario con ese nombre!</p>") ||
        data.includes("Este sistema mostrará tus estadísticas nuevas cada 10 minutos")
    ) return null;

    const serialized = splitData(data);
    const player = getPlayerInfo(serialized);
    const statistics = getPlayerStatistics(serialized);

    return { player, statistics }

}