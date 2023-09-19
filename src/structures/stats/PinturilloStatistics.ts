interface IPinturilloStatistics {
    wins: number,
    correctWords: number
}

export class PinturilloStatistics implements IPinturilloStatistics {
    
    public wins: number;
    public correctWords: number;
    constructor(data?: IPinturilloStatistics) {
        this.wins = data?.wins ?? 0;
        this.correctWords = data?.correctWords ?? 0;
    }

}