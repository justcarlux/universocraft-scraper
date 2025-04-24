import { queryUserByUsername, queryUserByUuid } from "./functions/queryUser";
import { fetchTop } from "./functions/fetchTop";

import { Player } from "./structures/main/Player";
import { Statistics } from "./structures/main/Statistics";
import { UserQuery } from "./structures/main/UserQuery";

import { Rank } from "./structures/misc/Rank";
import { RGBColorTuple } from "./structures/misc/RGBColorTuple";
import { Tag } from "./structures/misc/Tag";

import { ArenaPvPStatistics } from "./structures/stats/ArenaPvPStatistics";
import { BedWarsStatistics } from "./structures/stats/BedWarsStatistics";
import { BuildBattleStatistics } from "./structures/stats/BuildBattleStatistics";
import { CaptureTheWoolStatistics } from "./structures/stats/CaptureTheWoolStatistics";
import { DestroyTheNexusStatistics } from "./structures/stats/DestroyTheNexusStatistics";
import { EggWarsStatistics } from "./structures/stats/EggWarsStatistics";
import { HideAndSeekStatistics } from "./structures/stats/HideAndSeekStatistics";
import { SurvivalGamesStatistics } from "./structures/stats/SurvivalGamesStatistics";
import { LuckyWarsStatistics } from "./structures/stats/LuckyWarsStatistics";
import { MurderMysteryStatistics } from "./structures/stats/MurderMysteryStatistics";
import { PartyGamesStatistics } from "./structures/stats/PartyGamesStatistics";
import { PinturilloStatistics } from "./structures/stats/PinturilloStatistics";
import { RunFromTheBeastStatistics } from "./structures/stats/RunFromTheBeastStatistics";
import { SkyBlockStatistics } from "./structures/stats/SkyBlockStatistics";
import { SkyPitStatistics } from "./structures/stats/SkyPitStatistics";
import { SkyWarsStatistics } from "./structures/stats/SkyWarsStatistics";
import { SpeedBuildersStatistics } from "./structures/stats/SpeedBuildersStatistics";
import { TeamSkyWarsStatistics } from "./structures/stats/TeamSkyWarsStatistics";
import { TheBridgeSoloStatistics } from "./structures/stats/TheBridgeSoloStatistics";
import { TheBridgeDoublesStatistics } from "./structures/stats/TheBridgeDoublesStatistics";
import { TheBridgeThreesStatistics } from "./structures/stats/TheBridgeThreesStatistics";
import { TheBridgeTotalStatistics } from "./structures/stats/TheBridgeTotalStatistics";
import { TheBridgeLegacyStatistics } from "./structures/stats/TheBridgeLegacyStatistics";
import { TNTRunStatistics } from "./structures/stats/TNTRunStatistics";
import { TNTTagStatistics } from "./structures/stats/TNTTagStatistics";
import { UHCStatistics } from "./structures/stats/UHCStatistics";

import { TopRoutes, MinigamesNames, StatNames } from "./utils/constants";
import { setGlobalProxy } from "./utils/request";

export {
    queryUserByUsername,
    queryUserByUuid,
    fetchTop,
    Player,
    Statistics,
    UserQuery,
    Rank,
    RGBColorTuple,
    Tag,
    ArenaPvPStatistics,
    BedWarsStatistics,
    BuildBattleStatistics,
    CaptureTheWoolStatistics,
    DestroyTheNexusStatistics,
    EggWarsStatistics,
    HideAndSeekStatistics,
    SurvivalGamesStatistics,
    LuckyWarsStatistics,
    MurderMysteryStatistics,
    PartyGamesStatistics,
    PinturilloStatistics,
    RunFromTheBeastStatistics,
    SkyBlockStatistics,
    SkyPitStatistics,
    SkyWarsStatistics,
    SpeedBuildersStatistics,
    TeamSkyWarsStatistics,
    TheBridgeSoloStatistics,
    TheBridgeDoublesStatistics,
    TheBridgeThreesStatistics,
    TheBridgeTotalStatistics,
    TheBridgeLegacyStatistics,
    TNTRunStatistics,
    TNTTagStatistics,
    UHCStatistics,
    TopRoutes,
    MinigamesNames,
    StatNames,
    setGlobalProxy
};
