import { ArenaPvPStatistics } from "../stats/ArenaPvPStatistics";
import { BedWarsStatistics } from "../stats/BedWarsStatistics";
import { BuildBattleStatistics } from "../stats/BuildBattleStatistics";
import { CaptureTheWoolStatistics } from "../stats/CaptureTheWoolStatistics";
import { DestroyTheNexusStatistics } from "../stats/DestroyTheNexusStatistics";
import { EggWarsStatistics } from "../stats/EggWarsStatistics";
import { SurvivalGamesStatistics } from "../stats/SurvivalGamesStatistics";
import { LuckyWarsStatistics } from "../stats/LuckyWarsStatistics";
import { MurderMysteryStatistics } from "../stats/MurderMysteryStatistics";
import { PartyGamesStatistics } from "../stats/PartyGamesStatistics";
import { RunFromTheBeastStatistics } from "../stats/RunFromTheBeastStatistics";
import { SkyBlockStatistics } from "../stats/SkyBlockStatistics";
import { SkyPitStatistics } from "../stats/SkyPitStatistics";
import { SkyWarsStatistics } from "../stats/SkyWarsStatistics";
import { SpeedBuildersStatistics } from "../stats/SpeedBuildersStatistics";
import { TNTRunStatistics } from "../stats/TNTRunStatistics";
import { TNTTagStatistics } from "../stats/TNTTagStatistics";
import { TeamSkyWarsStatistics } from "../stats/TeamSkyWarsStatistics";
import { TheBridgeTotalStatistics } from "../stats/TheBridgeTotalStatistics";
import { TheBridgeSoloStatistics } from "../stats/TheBridgeSoloStatistics";
import { TheBridgeDoublesStatistics } from "../stats/TheBridgeDoublesStatistics";
import { TheBridgeThreesStatistics } from "../stats/TheBridgeThreesStatistics";
import { TheBridgeLegacyStatistics } from "../stats/TheBridgeLegacyStatistics";
import { UHCStatistics } from "../stats/UHCStatistics";
import { HideAndSeekStatistics } from "../stats/HideAndSeekStatistics";
import { PinturilloStatistics } from "../stats/PinturilloStatistics";

export interface Statistics {
    skyBlock: SkyBlockStatistics,
    theBridge: {
        total: TheBridgeTotalStatistics,
        solo: TheBridgeSoloStatistics,
        doubles: TheBridgeDoublesStatistics,
        threes: TheBridgeThreesStatistics,
        legacy: TheBridgeLegacyStatistics
    },
    destroyTheNexus: DestroyTheNexusStatistics,
    skyWars: SkyWarsStatistics,
    luckyWars: LuckyWarsStatistics,
    eggWars: EggWarsStatistics,
    bedWars: BedWarsStatistics,
    teamSkywars: TeamSkyWarsStatistics,
    speedBuilders: SpeedBuildersStatistics,
    tntRun: TNTRunStatistics,
    tntTag: TNTTagStatistics,
    hideAndSeek: HideAndSeekStatistics,
    pinturillo: PinturilloStatistics,
    buildBattle: BuildBattleStatistics,
    runFromTheBeast: RunFromTheBeastStatistics,
    partyGames: PartyGamesStatistics,
    survivalGames: SurvivalGamesStatistics,
    skyPit: SkyPitStatistics,
    arenaPvP: ArenaPvPStatistics,
    uhc: UHCStatistics,
    murderMystery: MurderMysteryStatistics,
    captureTheWool: CaptureTheWoolStatistics
}