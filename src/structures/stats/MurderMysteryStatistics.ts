interface IMurderMysteryStatistics {
    wins: number;
    losses: number;
    kills: number;
    deaths: number;
    karma: number;
    kdr: number;
}

export class MurderMysteryStatistics implements IMurderMysteryStatistics {
    public wins: number;
    public losses: number;
    public kills: number;
    public deaths: number;
    public karma: number;
    public kdr: number;
    constructor(data?: IMurderMysteryStatistics) {
        this.wins = data?.wins ?? 0;
        this.losses = data?.losses ?? 0;
        this.kills = data?.kills ?? 0;
        this.deaths = data?.deaths ?? 0;
        this.karma = data?.karma ?? 0;
        this.kdr = data?.kdr ?? 0;
    }
}
