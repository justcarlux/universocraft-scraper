interface ITheBridgeDoublesStatistics {
    wins: number,
    kills: number,
    goals: number
}

export class TheBridgeDoublesStatistics implements ITheBridgeDoublesStatistics {
    
    public wins: number;
    public kills: number;
    public goals: number;
    constructor(data?: ITheBridgeDoublesStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.goals = data?.goals ?? 0;
    }

}