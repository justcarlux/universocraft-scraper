interface ITNTRunStatistics {
    wins: number;
    playedGames: number;
}

export class TNTRunStatistics implements ITNTRunStatistics {
    public wins: number;
    public playedGames: number;
    constructor(data?: ITNTRunStatistics) {
        this.wins = data?.wins ?? 0;
        this.playedGames = data?.playedGames ?? 0;
    }
}
