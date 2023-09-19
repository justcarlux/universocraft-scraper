import minigames from "../resources/minigames.json";
import statNames from "../resources/stat-names.json";
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

export function getPlayerStatistics(serialized: string[]): Statistics {
    
    const indexes = filterIndexes(serialized, (e) => {
        return e.includes(`class="game-header-title`) ||
        e.includes(`<div class="game-content">`);
    });
    
    const raw = new Map<string, any>();
    let currentGamemodeKey = "";
    let currentStatKey = "";
    indexes.forEach((value, index) => {
        const isMinigameTitle = index % 2 === 0;
        if (isMinigameTitle) {
            currentGamemodeKey = minigames[serialized[value + 1] as keyof typeof minigames];
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
            if (data.includes(`id="thebridge"`)) {
                currentGamemodeKey = "theBridgeTotal";
            } else if (data.includes(`id="thebridgesolo_"`)) {
                currentGamemodeKey = "theBridgeSolo";
            } else if (data.includes(`id="thebridgedoubles_"`)) {
                currentGamemodeKey = "theBridgeDoubles";
            } else if (data.includes(`id="thebridgetriples_"`)) {
                currentGamemodeKey = "theBridgeThrees";
            } else if (data.includes(`id="thebridgelegacy_"`)) {
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
                currentStatKey = statNames[data.toLowerCase() as keyof typeof statNames];
            }
        }
    });

    return {
        skyBlock: new SkyBlockStatistics(raw.get("skyBlock")),
        theBridge: {
            total: new TheBridgeTotalStatistics(raw.get("theBridgeTotal")),
            solo: new TheBridgeSoloStatistics(raw.get("theBridgeSolo")),
            doubles: new TheBridgeDoublesStatistics(raw.get("theBridgeDoubles")),
            threes: new TheBridgeThreesStatistics(raw.get("theBridgeThrees")),
            legacy: new TheBridgeLegacyStatistics(raw.get("theBridgeLegacy"))
        },
        destroyTheNexus: new DestroyTheNexusStatistics(raw.get("destroyTheNexus")),
        skyWars: new SkyWarsStatistics(raw.get("skyWars")),
        luckyWars: new LuckyWarsStatistics(raw.get("luckyWars")),
        eggWars: new EggWarsStatistics(raw.get("eggWars")),
        bedWars: new BedWarsStatistics(raw.get("bedWars")),
        teamSkywars: new TeamSkyWarsStatistics(raw.get("teamSkywars")),
        speedBuilders: new SpeedBuildersStatistics(raw.get("speedBuilders")),
        tntRun: new TNTRunStatistics(raw.get("tntRun")),
        tntTag: new TNTTagStatistics(raw.get("tntTag")),
        hideAndSeek: new HideAndSeekStatistics(raw.get("hideAndSeek")),
        pinturillo: new PinturilloStatistics(raw.get("pinturillo")),
        buildBattle: new BuildBattleStatistics(raw.get("buildBattle")),
        runFromTheBeast: new RunFromTheBeastStatistics(raw.get("runFromTheBeast")),
        partyGames: new PartyGamesStatistics(raw.get("partyGames")),
        survivalGames: new SurvivalGamesStatistics(raw.get("survivalGames")),
        skyPit: new SkyPitStatistics(raw.get("skyPit")),
        arenaPvP: new ArenaPvPStatistics(raw.get("arenaPvP")),
        uhc: new UHCStatistics(raw.get("uhc")),
        murderMystery: new MurderMysteryStatistics(raw.get("murderMystery")),
        captureTheWool: new CaptureTheWoolStatistics(raw.get("captureTheWool"))
    }

}