interface ITNTTagStatistics {
    wins: number;
    kills: number;
    unicoins: number;
    karma: number;
}

export class TNTTagStatistics implements ITNTTagStatistics {
    public wins: number;
    public kills: number;
    public unicoins: number;
    public karma: number;
    constructor(data?: ITNTTagStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.unicoins = data?.unicoins ?? 0;
        this.karma = data?.karma ?? 0;
    }
}
