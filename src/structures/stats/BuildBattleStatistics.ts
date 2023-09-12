interface IBuildBattleStatistics {
    wins: number,
    playedGames: number,
    score: number
}

export class BuildBattleStatistics implements IBuildBattleStatistics {
    
    public wins: number;
    public playedGames: number;
    public score: number;
    constructor(data?: IBuildBattleStatistics) {
        this.wins = data?.wins ?? 0;
        this.playedGames = data?.playedGames ?? 0;
        this.score = data?.score ?? 0;
    }

}