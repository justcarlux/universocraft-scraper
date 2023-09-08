interface IArenaPvPStatistics {
    wins: number,
    kills: number,
    losses: number,
}

export class ArenaPvPStatistics implements IArenaPvPStatistics {
    
    public wins: number;
    public kills: number;
    public losses: number;
    constructor(data?: IArenaPvPStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.losses = data?.losses ?? 0;
    }

}