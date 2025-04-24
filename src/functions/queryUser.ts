import { getPlayerInfo } from "../scrapers/player";
import { getPlayerStatistics } from "../scrapers/statistics";
import { UserQuery } from "../structures/main/UserQuery";
import { proxiedRequest } from "../utils/request";
import { splitData } from "../utils/split-data";

/**
 * Fetch statistics and player information from UniversoCraft given an username. Returns a `Promise` with an `UserQuery` object with the player information, or null if it was not found.
 * @param { string } username Username of the player
 * @returns { Promise<UserQuery | null> } The information on succeed, or null if the player was not found. Throws an error when the page doesn't return any data or or when the `fetch` fails
 */
export async function queryUserByUsername(username: string): Promise<UserQuery | null> {
    const data = await proxiedRequest(`/jugador/${encodeURIComponent(username)}`);
    return parseQuery(data);
}

/**
 * Fetch statistics and player information from UniversoCraft given a Minecraft profile UUID. Returns a `Promise` with an `UserQuery` object with the player information, or null if it was not found.
 * @param { string } uuid Minecraft profile UUID of the player
 * @returns { Promise<UserQuery | null> } The information on succeed, or null if the player was not found. Throws an error when the page doesn't return any data or or when the `fetch` fails
 */
export async function queryUserByUuid(uuid: string): Promise<UserQuery | null> {
    const data = await proxiedRequest(
        `/jugador/${encodeURIComponent(
            !uuid.includes("-")
                ? `${uuid.substring(0, 8)}-${uuid.substring(
                      8,
                      12
                  )}-${uuid.substring(12, 16)}-${uuid.substring(
                      16,
                      20
                  )}-${uuid.substring(20)}`
                : uuid
        )}`
    );
    return parseQuery(data);
}

function parseQuery(data: string): UserQuery | null {
    if (!data.trim()) {
        throw new Error(
            "Page didn't return any data. Maybe you're getting rate-limited."
        );
    }

    if (data.includes("404 ERROR") || data.includes("Server Error")) {
        throw new Error("Invalid provided arguments. URL didn't work.");
    }

    if (
        data.includes("¡No se ha encontrado el jugador buscado!") ||
        data.includes("Este sistema mostrará tus estadísticas nuevas cada 10 minutos")
    )
        return null;

    const serialized = splitData(data);
    const player = getPlayerInfo(serialized);
    const statistics = getPlayerStatistics(serialized);

    return { player, statistics };
}
