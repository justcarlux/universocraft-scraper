interface ISkyPitStatistics {
    level: number;
    unicoins: number;
    assistances: number;
    kills: number;
    deaths: number;
    karma: number;
    kdr: number;
}

export class SkyPitStatistics implements ISkyPitStatistics {
    public level: number;
    public unicoins: number;
    public assistances: number;
    public kills: number;
    public deaths: number;
    public karma: number;
    public kdr: number;
    constructor(data?: ISkyPitStatistics) {
        this.level = data?.level ?? 0;
        this.unicoins = data?.unicoins ?? 0;
        this.assistances = data?.assistances ?? 0;
        this.kills = data?.kills ?? 0;
        this.deaths = data?.deaths ?? 0;
        this.karma = data?.karma ?? 0;
        this.kdr = data?.kdr ?? 0;
    }
}
