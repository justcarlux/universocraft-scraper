interface ITheBridgeTotalStatistics {
    wins: number;
    kills: number;
    goals: number;
    karma: number;
}

export class TheBridgeTotalStatistics implements ITheBridgeTotalStatistics {
    public wins: number;
    public kills: number;
    public goals: number;
    public karma: number;
    constructor(data?: ITheBridgeTotalStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.goals = data?.goals ?? 0;
        this.karma = data?.karma ?? 0;
    }
}
