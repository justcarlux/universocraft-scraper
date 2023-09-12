interface IHungerGamesStatistics {
    wins: number,
    kills: number,
    deaths: number
}

export class HungerGamesStatistics implements IHungerGamesStatistics {
    
    public wins: number;
    public kills: number;
    public deaths: number;
    constructor(data?: IHungerGamesStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.deaths = data?.deaths ?? 0;
    }

}