interface ITeamSkyWarsStatistics {
    wins: number,
    kills: number,
    deaths: number,
    placedBlocks: number,
    brokenBlocks: number,
    launchedProjectiles: number,
    landedProjectiles: number
}

export class TeamSkyWarsStatistics implements ITeamSkyWarsStatistics {
    
    public wins: number;
    public kills: number;
    public deaths: number;
    public placedBlocks: number;
    public brokenBlocks: number;
    public launchedProjectiles: number;
    public landedProjectiles: number;
    constructor(data?: ITeamSkyWarsStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.deaths = data?.deaths ?? 0;
        this.placedBlocks = data?.placedBlocks ?? 0;
        this.brokenBlocks = data?.brokenBlocks ?? 0;
        this.launchedProjectiles = data?.launchedProjectiles ?? 0;
        this.landedProjectiles = data?.landedProjectiles ?? 0;
    }

}