interface IDestroyTheNexusStatistics {
    wins: number;
    kills: number;
    killsWithBow: number;
    deaths: number;
    nexusDamage: number;
    nexusDestructions: number;
    placedBlocks: number;
    brokenBlocks: number;
    brokenOres: number;
    brokenLogs: number;
    karma: number;
    kdr: number;
}

export class DestroyTheNexusStatistics implements IDestroyTheNexusStatistics {
    public wins: number;
    public kills: number;
    public killsWithBow: number;
    public deaths: number;
    public nexusDamage: number;
    public nexusDestructions: number;
    public placedBlocks: number;
    public brokenBlocks: number;
    public brokenOres: number;
    public brokenLogs: number;
    public karma: number;
    public kdr: number;
    constructor(data?: IDestroyTheNexusStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.killsWithBow = data?.killsWithBow ?? 0;
        this.deaths = data?.deaths ?? 0;
        this.nexusDamage = data?.nexusDamage ?? 0;
        this.nexusDestructions = data?.nexusDestructions ?? 0;
        this.placedBlocks = data?.placedBlocks ?? 0;
        this.brokenBlocks = data?.brokenBlocks ?? 0;
        this.brokenOres = data?.brokenOres ?? 0;
        this.brokenLogs = data?.brokenLogs ?? 0;
        this.karma = data?.karma ?? 0;
        this.kdr = data?.kdr ?? 0;
    }
}
