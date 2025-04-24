interface ISkyBlockStatistics {
    generalLevel: number;
    kills: number;
    deaths: number;
    unicoins: number;
    bankAccount: number;
    gems: number;
    playedTime: number;
    karma: number;
    kdr: number;
}

export class SkyBlockStatistics implements ISkyBlockStatistics {
    public generalLevel: number;
    public kills: number;
    public deaths: number;
    public unicoins: number;
    public bankAccount: number;
    public gems: number;
    public playedTime: number;
    public karma: number;
    public kdr: number;
    constructor(data?: ISkyBlockStatistics) {
        this.generalLevel = data?.generalLevel ?? 0;
        this.kills = data?.kills ?? 0;
        this.deaths = data?.deaths ?? 0;
        this.unicoins = data?.unicoins ?? 0;
        this.bankAccount = data?.bankAccount ?? 0;
        this.gems = data?.gems ?? 0;
        this.playedTime = data?.playedTime ?? 0;
        this.karma = data?.karma ?? 0;
        this.kdr = data?.kdr ?? 0;
    }
}
