interface ITheBridgeTotalStatistics {
    wins: number,
    kills: number,
    goals: number
}

export class TheBridgeTotalStatistics implements ITheBridgeTotalStatistics {
    
    public wins: number;
    public kills: number;
    public goals: number;
    constructor(data?: ITheBridgeTotalStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.goals = data?.goals ?? 0;
    }

}