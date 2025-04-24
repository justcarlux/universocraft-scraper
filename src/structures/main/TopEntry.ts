export interface TopEntry {
    /** Player top position relative to the page index */
    position: number;
    /** Player username */
    username: string;
    /** Statistic number */
    value: number;
    /** Player's profile URL */
    url: string;
    /** Link of the player's head used in the statistics page, belongs to the Mineskin API (only available for players in the top 5) */
    head: string | null;
    /** Player skin texture link, grabbed from the head link (only available for players in the top 5) */
    skin: string | null;
}
