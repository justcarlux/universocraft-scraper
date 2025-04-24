interface IBedWarsStatistics {
    wins: number;
    kills: number;
    finalKills: number;
    brokenBeds: number;
    deaths: number;
    finalDeaths: number;
    playedGames: number;
    karma: number;
    kdr: number;
}

export class BedWarsStatistics implements IBedWarsStatistics {
    public wins: number;
    public kills: number;
    public finalKills: number;
    public brokenBeds: number;
    public deaths: number;
    public finalDeaths: number;
    public playedGames: number;
    public karma: number;
    public kdr: number;
    constructor(data?: IBedWarsStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.finalKills = data?.finalKills ?? 0;
        this.brokenBeds = data?.brokenBeds ?? 0;
        this.deaths = data?.deaths ?? 0;
        this.finalDeaths = data?.finalDeaths ?? 0;
        this.playedGames = data?.playedGames ?? 0;
        this.karma = data?.karma ?? 0;
        this.kdr = data?.kdr ?? 0;
    }
}
