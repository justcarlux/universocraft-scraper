interface ITheBridgeThreesStatistics {
    wins: number,
    kills: number,
    goals: number
}

export class TheBridgeThreesStatistics implements ITheBridgeThreesStatistics {
    
    public wins: number;
    public kills: number;
    public goals: number;
    constructor(data?: ITheBridgeThreesStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.goals = data?.goals ?? 0;
    }

}