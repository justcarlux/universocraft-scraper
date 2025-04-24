interface ITurfWarsStatistics {
    wins: number;
    kills: number;
    deaths: number;
    karma: number;
    playedGames: number;
    kdr: number;
}

export class TurfWarsStatistics implements ITurfWarsStatistics {
    public wins: number;
    public kills: number;
    public deaths: number;
    public karma: number;
    public playedGames: number;
    public kdr: number;
    constructor(data?: ITurfWarsStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.deaths = data?.deaths ?? 0;
        this.karma = data?.karma ?? 0;
        this.playedGames = data?.playedGames ?? 0;
        this.kdr = data?.kdr ?? 0;
    }
}
