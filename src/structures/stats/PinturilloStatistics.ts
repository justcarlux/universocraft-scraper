interface IPinturilloStatistics {
    wins: number;
    correctWords: number;
    karma: number;
}

export class PinturilloStatistics implements IPinturilloStatistics {
    public wins: number;
    public correctWords: number;
    public karma: number;
    constructor(data?: IPinturilloStatistics) {
        this.wins = data?.wins ?? 0;
        this.correctWords = data?.correctWords ?? 0;
        this.karma = data?.karma ?? 0;
    }
}
