interface IHideAndSeekStatistics {
    wins: number,
    kills: number,
    unicoins: number
}

export class HideAndSeekStatistics implements IHideAndSeekStatistics {
    
    public wins: number;
    public kills: number;
    public unicoins: number;
    constructor(data?: IHideAndSeekStatistics) {
        this.wins = data?.wins ?? 0;
        this.kills = data?.kills ?? 0;
        this.unicoins = data?.unicoins ?? 0;
    }

}