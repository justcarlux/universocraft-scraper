interface ISkyBlockStatistics {
    generalLevel: number,
    kills: number,
    deaths: number,
    unicoins: number,
    bankAccount: number,
    gems: number,
    playedTime: number
}

export class SkyBlockStatistics implements ISkyBlockStatistics {
    
    public generalLevel: number;
    public kills: number;
    public deaths: number;
    public unicoins: number;
    public bankAccount: number;
    public gems: number;
    public playedTime: number;
    constructor(data?: ISkyBlockStatistics) {
        this.generalLevel = data?.generalLevel ?? 0;
        this.kills = data?.kills ?? 0;
        this.deaths = data?.deaths ?? 0;
        this.unicoins = data?.unicoins ?? 0;
        this.bankAccount = data?.unicoins ?? 0;
        this.gems = data?.gems ?? 0;
        this.playedTime = data?.playedTime ?? 0;
    }

}