interface ISpeedBuildersStatistics {
    wins: number,
    losses: number,
    perfectBuilds: number
}

export class SpeedBuildersStatistics implements ISpeedBuildersStatistics {
    
    public wins: number;
    public losses: number;
    public perfectBuilds: number;
    constructor(data?: ISpeedBuildersStatistics) {
        this.wins = data?.wins ?? 0;
        this.losses = data?.losses ?? 0;
        this.perfectBuilds = data?.perfectBuilds ?? 0;
    }

}