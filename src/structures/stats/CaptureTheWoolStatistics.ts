interface ICaptureTheWoolStatistics {
    score: number,
    kills: number,
    killsWithBow: number,
    maximumBowDeathDistance: number,
    placedWools: number,
}

export class CaptureTheWoolStatistics implements ICaptureTheWoolStatistics {
    
    public score: number;
    public kills: number;
    public killsWithBow: number;
    public maximumBowDeathDistance: number;
    public placedWools: number;
    constructor(data?: ICaptureTheWoolStatistics) {
        this.score = data?.score ?? 0;
        this.kills = data?.kills ?? 0;
        this.killsWithBow = data?.killsWithBow ?? 0;
        this.maximumBowDeathDistance = data?.maximumBowDeathDistance ?? 0;
        this.placedWools = data?.placedWools ?? 0;
    }

}