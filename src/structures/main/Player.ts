import { Rank } from "../misc/Rank";
import { Tag } from "../misc/Tag";

export interface Player {
    /** Player username */
    username: string,
    /** Link of the player's head used in the statistics page, belongs to the Mineskin API */
    head: string,
    /** Player skin texture link, grabbed from the head link */
    skin: string,
    /** List of player ranks */
    ranks: Rank[],
    /** List of player tags */
    tags: Tag[],
    /** Date when the player last connected to the server. Equals to `null` if the date is "eternal" */
    lastConnection: Date | null,
    /** Last Minecraft version the player used to connect to the server */
    lastVersion: string,
    /** Date when the player first connected to the server */
    firstConnection: Date,
    /** Player friend count */
    friends: number
}