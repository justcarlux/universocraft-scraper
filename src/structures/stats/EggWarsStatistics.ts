interface IEggWarsStatistics {
    wins: number;
    kills: number;
    brokenEggs: number;
    deaths: number;
    placedBlocks: number;
    brokenBlocks: number;
    launchedProjectiles: number;
    landedProjectiles: number;
    karma: number;
    kdr: number;
}

export class EggWarsStatistics implements IEggWarsStatistics {
    public wins: number;
    public kills: number;
    public brokenEggs: number;
    public deaths: number;
    public placedBlocks: number;
    public brokenBlocks: number;
    public launchedProjectiles: number;
    public landedProjectiles: number;
    public karma: number;
    public kdr: number;
    constructor(data?: IEggWarsStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.brokenEggs = data?.brokenEggs ?? 0;
        this.deaths = data?.deaths ?? 0;
        this.placedBlocks = data?.placedBlocks ?? 0;
        this.brokenBlocks = data?.brokenBlocks ?? 0;
        this.launchedProjectiles = data?.launchedProjectiles ?? 0;
        this.landedProjectiles = data?.landedProjectiles ?? 0;
        this.karma = data?.karma ?? 0;
        this.kdr = data?.kdr ?? 0;
    }
}
