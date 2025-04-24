interface IBuildBattleStatistics {
    wins: number;
    playedGames: number;
    score: number;
    karma: number;
}

export class BuildBattleStatistics implements IBuildBattleStatistics {
    public wins: number;
    public playedGames: number;
    public score: number;
    public karma: number;
    constructor(data?: IBuildBattleStatistics) {
        this.wins = data?.wins ?? 0;
        this.playedGames = data?.playedGames ?? 0;
        this.score = data?.score ?? 0;
        this.karma = data?.karma ?? 0;
    }
}
