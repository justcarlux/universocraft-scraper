interface ITheBridgeStatistics {
    wins: number,
    kills: number,
    goals: number
}

export class TheBridgeStatistics implements ITheBridgeStatistics {
    
    public wins: number;
    public kills: number;
    public goals: number;
    constructor(data?: ITheBridgeStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.goals = data?.goals ?? 0;
    }

}