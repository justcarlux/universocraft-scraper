interface ITheBridgeLegacyStatistics {
    wins: number,
    kills: number,
    goals: number
}

export class TheBridgeLegacyStatistics implements ITheBridgeLegacyStatistics {
    
    public wins: number;
    public kills: number;
    public goals: number;
    constructor(data?: ITheBridgeLegacyStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.goals = data?.goals ?? 0;
    }

}