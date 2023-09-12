interface ITheBridgeSoloStatistics {
    wins: number,
    kills: number,
    goals: number
}

export class TheBridgeSoloStatistics implements ITheBridgeSoloStatistics {
    
    public wins: number;
    public kills: number;
    public goals: number;
    constructor(data?: ITheBridgeSoloStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.goals = data?.goals ?? 0;
    }

}