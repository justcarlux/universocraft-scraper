interface IPartyGamesStatistics {
    wins: number;
    kills: number;
    deaths: number;
    playedGames: number;
    karma: number;
    kdr: number;
}

export class PartyGamesStatistics implements IPartyGamesStatistics {
    public wins: number;
    public kills: number;
    public deaths: number;
    public playedGames: number;
    public karma: number;
    public kdr: number;
    constructor(data?: IPartyGamesStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.deaths = data?.deaths ?? 0;
        this.playedGames = data?.playedGames ?? 0;
        this.karma = data?.karma ?? 0;
        this.kdr = data?.kdr ?? 0;
    }
}
