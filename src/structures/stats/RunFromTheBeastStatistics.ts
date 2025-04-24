interface IRunFromTheBeastStatistics {
    totalWins: number;
    winsAsRunner: number;
    winsAsBeast: number;
    killsAsRunner: number;
    killsAsBeast: number;
    karma: number;
}

export class RunFromTheBeastStatistics implements IRunFromTheBeastStatistics {
    public totalWins: number;
    public winsAsRunner: number;
    public winsAsBeast: number;
    public killsAsRunner: number;
    public killsAsBeast: number;
    public karma: number;
    constructor(data?: IRunFromTheBeastStatistics) {
        this.totalWins = data?.totalWins ?? 0;
        this.winsAsRunner = data?.winsAsRunner ?? 0;
        this.winsAsBeast = data?.winsAsBeast ?? 0;
        this.killsAsRunner = data?.killsAsRunner ?? 0;
        this.killsAsBeast = data?.killsAsBeast ?? 0;
        this.karma = data?.karma ?? 0;
    }
}
