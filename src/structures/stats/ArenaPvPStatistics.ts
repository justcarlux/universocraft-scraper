interface IArenaPvPStatistics {
    wins: number;
    kills: number;
    losses: number;
    karma: number;
}

export class ArenaPvPStatistics implements IArenaPvPStatistics {
    public wins: number;
    public kills: number;
    public losses: number;
    public karma: number;
    constructor(data?: IArenaPvPStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.losses = data?.losses ?? 0;
        this.karma = data?.karma ?? 0;
    }
}
