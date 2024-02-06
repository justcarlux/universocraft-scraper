interface ITheBridgeDoublesStatistics {
    wins: number,
    kills: number,
    goals: number,
    karma: number
}

export class TheBridgeDoublesStatistics implements ITheBridgeDoublesStatistics {
    
    public wins: number;
    public kills: number;
    public goals: number;
    public karma: number;
    constructor(data?: ITheBridgeDoublesStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.goals = data?.goals ?? 0;
        this.karma = data?.karma ?? 0;
    }

}