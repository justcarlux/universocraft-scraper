interface ICaptureTheWoolStatistics {
    score: number,
    kills: number,
    killsWithBow: number,
    maximumBowKillDistance: number,
    placedWools: number
}

export class CaptureTheWoolStatistics implements ICaptureTheWoolStatistics {
    
    public score: number;
    public kills: number;
    public killsWithBow: number;
    public maximumBowKillDistance: number;
    public placedWools: number;
    constructor(data?: ICaptureTheWoolStatistics) {
        this.score = data?.score ?? 0;
        this.kills = data?.kills ?? 0;
        this.killsWithBow = data?.killsWithBow ?? 0;
        this.maximumBowKillDistance = data?.maximumBowKillDistance ?? 0;
        this.placedWools = data?.placedWools ?? 0;
    }

}