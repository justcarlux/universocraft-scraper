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
    /** Date the player was last connected to the server */
    lastSeen: Date | null
}