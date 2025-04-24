interface ICaptureTheWoolStatistics {
    score: number;
    kills: number;
    killsWithBow: number;
    maximumBowKillDistance: number;
    placedWools: number;
    wins: number;
    defenses: number;
    doubleWools: number;
    karma: number;
}

export class CaptureTheWoolStatistics implements ICaptureTheWoolStatistics {
    public score: number;
    public kills: number;
    public killsWithBow: number;
    public maximumBowKillDistance: number;
    public placedWools: number;
    public wins: number;
    public defenses: number;
    public doubleWools: number;
    public karma: number;
    constructor(data?: ICaptureTheWoolStatistics) {
        this.score = data?.score ?? 0;
        this.kills = data?.kills ?? 0;
        this.killsWithBow = data?.killsWithBow ?? 0;
        this.maximumBowKillDistance = data?.maximumBowKillDistance ?? 0;
        this.placedWools = data?.placedWools ?? 0;
        this.wins = data?.wins ?? 0;
        this.defenses = data?.defenses ?? 0;
        this.doubleWools = data?.doubleWools ?? 0;
        this.karma = data?.karma ?? 0;
    }
}
