import { Statistics } from "../structures/main/Statistics";
import { ArenaPvPStatistics } from "../structures/stats/ArenaPvPStatistics";
import { BedWarsStatistics } from "../structures/stats/BedWarsStatistics";
import { BuildBattleStatistics } from "../structures/stats/BuildBattleStatistics";
import { CaptureTheWoolStatistics } from "../structures/stats/CaptureTheWoolStatistics";
import { DestroyTheNexusStatistics } from "../structures/stats/DestroyTheNexusStatistics";
import { EggWarsStatistics } from "../structures/stats/EggWarsStatistics";
import { HideAndSeekStatistics } from "../structures/stats/HideAndSeekStatistics";
import { SurvivalGamesStatistics } from "../structures/stats/SurvivalGamesStatistics";
import { LuckyWarsStatistics } from "../structures/stats/LuckyWarsStatistics";
import { MurderMysteryStatistics } from "../structures/stats/MurderMysteryStatistics";
import { PartyGamesStatistics } from "../structures/stats/PartyGamesStatistics";
import { PinturilloStatistics } from "../structures/stats/PinturilloStatistics";
import { RunFromTheBeastStatistics } from "../structures/stats/RunFromTheBeastStatistics";
import { SkyBlockStatistics } from "../structures/stats/SkyBlockStatistics";
import { SkyPitStatistics } from "../structures/stats/SkyPitStatistics";
import { SkyWarsStatistics } from "../structures/stats/SkyWarsStatistics";
import { SpeedBuildersStatistics } from "../structures/stats/SpeedBuildersStatistics";
import { TNTRunStatistics } from "../structures/stats/TNTRunStatistics";
import { TNTTagStatistics } from "../structures/stats/TNTTagStatistics";
import { TeamSkyWarsStatistics } from "../structures/stats/TeamSkyWarsStatistics";
import { TheBridgeDoublesStatistics } from "../structures/stats/TheBridgeDoublesStatistics";
import { TheBridgeLegacyStatistics } from "../structures/stats/TheBridgeLegacyStatistics";
import { TheBridgeSoloStatistics } from "../structures/stats/TheBridgeSoloStatistics";
import { TheBridgeThreesStatistics } from "../structures/stats/TheBridgeThreesStatistics";
import { TheBridgeTotalStatistics } from "../structures/stats/TheBridgeTotalStatistics";
import { UHCStatistics } from "../structures/stats/UHCStatistics";
import { filterIndexes } from "../utils/array-related";
import { appropiateStatParse } from "./util";
import { MinigamesNames, StatNames } from "../utils/constants";
import { TurfWarsStatistics } from "../structures/stats/TurfWarsStatistics";

export function getPlayerStatistics(serialized: string[]): Statistics {
    const indexes = filterIndexes(serialized, e => {
        return (
            e.includes(`<h2 class="GameTitleText"`) ||
            e.includes(`<div class="GameStats">`) ||
            e.includes(`<div class="GameMode`)
        );
    });

    const raw = new Map<string, any>();
    let currentGamemodeKey = "";
    let currentStatKey = "";
    indexes.forEach((value, index) => {
        const isMinigameTitle = index % 2 === 0;
        if (isMinigameTitle) {
            currentGamemodeKey =
                MinigamesNames[serialized[value + 1] as keyof typeof MinigamesNames];
            return;
        }

        while (true) {
            value++;
            const data = serialized[value];

            if (
                // finish when it finds 3 consecutive div close tags
                serialized[value - 2].includes("</div>") &&
                serialized[value - 1].includes("</div>") &&
                data.includes("</div>")
            ) {
                break;
            }

            // hardcode for the bridge since it is tabulated :(
            if (serialized[value - 2].includes(`id="thebridge-TOTAL"`)) {
                currentGamemodeKey = "theBridgeTotal";
            } else if (serialized[value - 2].includes(`id="thebridge-SOLO"`)) {
                currentGamemodeKey = "theBridgeSolo";
            } else if (serialized[value - 2].includes(`id="thebridge-DOBLES"`)) {
                currentGamemodeKey = "theBridgeDoubles";
            } else if (serialized[value - 2].includes(`id="thebridge-TRIPLES"`)) {
                currentGamemodeKey = "theBridgeThrees";
            } else if (serialized[value - 2].includes(`id="thebridge-LEGACY"`)) {
                currentGamemodeKey = "theBridgeLegacy";
            }

            if (data.startsWith("<")) continue;
            if (currentStatKey) {
                raw.set(currentGamemodeKey, {
                    ...(raw.get(currentGamemodeKey) || {}),
                    [currentStatKey]: appropiateStatParse(data)
                });
                currentStatKey = "";
            } else {
                currentStatKey = StatNames[data.toLowerCase() as keyof typeof StatNames];
            }
        }
    });

    return {
        partyGames: new PartyGamesStatistics(raw.get("partyGames")),
        speedBuilders: new SpeedBuildersStatistics(raw.get("speedBuilders")),
        teamSkyWars: new TeamSkyWarsStatistics(raw.get("teamSkyWars")),
        buildBattle: new BuildBattleStatistics(raw.get("buildBattle")),
        skyPit: new SkyPitStatistics(raw.get("skyPit")),
        tntRun: new TNTRunStatistics(raw.get("tntRun")),
        pinturillo: new PinturilloStatistics(raw.get("pinturillo")),
        captureTheWool: new CaptureTheWoolStatistics(raw.get("captureTheWool")),
        eggWars: new EggWarsStatistics(raw.get("eggWars")),
        destroyTheNexus: new DestroyTheNexusStatistics(raw.get("destroyTheNexus")),
        murderMystery: new MurderMysteryStatistics(raw.get("murderMystery")),
        arenaPvP: new ArenaPvPStatistics(raw.get("arenaPvP")),
        skyWars: new SkyWarsStatistics(raw.get("skyWars")),
        uhc: new UHCStatistics(raw.get("uhc")),
        survivalGames: new SurvivalGamesStatistics(raw.get("survivalGames")),
        tntTag: new TNTTagStatistics(raw.get("tntTag")),
        skyBlock: new SkyBlockStatistics(raw.get("skyBlock")),
        bedWars: new BedWarsStatistics(raw.get("bedWars")),
        runFromTheBeast: new RunFromTheBeastStatistics(raw.get("runFromTheBeast")),
        luckyWars: new LuckyWarsStatistics(raw.get("luckyWars")),
        hideAndSeek: new HideAndSeekStatistics(raw.get("hideAndSeek")),
        theBridge: {
            total: new TheBridgeTotalStatistics(raw.get("theBridgeTotal")),
            solo: new TheBridgeSoloStatistics(raw.get("theBridgeSolo")),
            doubles: new TheBridgeDoublesStatistics(raw.get("theBridgeDoubles")),
            threes: new TheBridgeThreesStatistics(raw.get("theBridgeThrees")),
            legacy: new TheBridgeLegacyStatistics(raw.get("theBridgeLegacy"))
        },
        turfWars: new TurfWarsStatistics(raw.get("turfWars"))
    };
}
