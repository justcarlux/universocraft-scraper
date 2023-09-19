interface ISurvivalGamesStatistics {
    wins: number,
    kills: number,
    deaths: number
}

export class SurvivalGamesStatistics implements ISurvivalGamesStatistics {
    
    public wins: number;
    public kills: number;
    public deaths: number;
    constructor(data?: ISurvivalGamesStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.deaths = data?.deaths ?? 0;
    }

}