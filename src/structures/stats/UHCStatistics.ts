interface IUHCStatistics {
    wins: number;
    losses: number;
    playedGames: number;
    kills: number;
    deaths: number;
    karma: number;
    kdr: number;
}

export class UHCStatistics implements IUHCStatistics {
    public wins: number;
    public losses: number;
    public playedGames: number;
    public kills: number;
    public deaths: number;
    public karma: number;
    public kdr: number;
    constructor(data?: IUHCStatistics) {
        this.wins = data?.wins ?? 0;
        this.losses = data?.losses ?? 0;
        this.playedGames = data?.playedGames ?? 0;
        this.kills = data?.kills ?? 0;
        this.deaths = data?.deaths ?? 0;
        this.karma = data?.karma ?? 0;
        this.kdr = data?.kdr ?? 0;
    }
}
