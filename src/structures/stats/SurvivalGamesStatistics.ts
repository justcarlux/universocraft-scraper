interface ISurvivalGamesStatistics {
    wins: number;
    kills: number;
    deaths: number;
    karma: number;
    kdr: number;
}

export class SurvivalGamesStatistics implements ISurvivalGamesStatistics {
    public wins: number;
    public kills: number;
    public deaths: number;
    public karma: number;
    public kdr: number;
    constructor(data?: ISurvivalGamesStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.deaths = data?.deaths ?? 0;
        this.karma = data?.karma ?? 0;
        this.kdr = data?.kdr ?? 0;
    }
}
