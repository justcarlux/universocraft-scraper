import { Player } from "./Player";
import { Statistics } from "./Statistics";

export interface UserQuery {
    /** Basic information of the player */
    player: Player;
    /** Statistics of the player on the server’s minigames*/
    statistics: Statistics;
}
