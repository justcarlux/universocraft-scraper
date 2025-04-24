interface ITheBridgeLegacyStatistics {
    wins: number;
    kills: number;
    goals: number;
    karma: number;
}

export class TheBridgeLegacyStatistics implements ITheBridgeLegacyStatistics {
    public wins: number;
    public kills: number;
    public goals: number;
    public karma: number;
    constructor(data?: ITheBridgeLegacyStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.goals = data?.goals ?? 0;
        this.karma = data?.karma ?? 0;
    }
}
