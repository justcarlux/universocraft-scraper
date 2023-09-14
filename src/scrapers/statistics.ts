import minigames from "../resources/minigames.json";
import statNames from "../resources/stat-names.json";
import { ArenaPvPStatistics } from "../structures/stats/ArenaPvPStatistics";
import { BedWarsStatistics } from "../structures/stats/BedWarsStatistics";
import { BuildBattleStatistics } from "../structures/stats/BuildBattleStatistics";
import { CaptureTheWoolStatistics } from "../structures/stats/CaptureTheWoolStatistics";
import { DestroyTheNexusStatistics } from "../structures/stats/DestroyTheNexusStatistics";
import { EggWarsStatistics } from "../structures/stats/EggWarsStatistics";
import { HungerGamesStatistics } from "../structures/stats/HungerGamesStatistics";
import { LuckyWarsStatistics } from "../structures/stats/LuckyWarsStatistics";
import { MurderMysteryStatistics } from "../structures/stats/MurderMysteryStatistics";
import { PartyGamesStatistics } from "../structures/stats/PartyGamesStatistics";
import { RunFromTheBeastStatistics } from "../structures/stats/RunFromTheBeastStatistics";
import { SkyBlockStatistics } from "../structures/stats/SkyBlockStatistics";
import { SkyPitStatistics } from "../structures/stats/SkyPitStatistics";
import { SkyWarsStatistics } from "../structures/stats/SkyWarsStatistics";
import { SpeedBuildersStatistics } from "../structures/stats/SpeedBuildersStatistics";
import { TNTRunStatistics } from "../structures/stats/TNTRunStatistics";
import { TNTTagStatistics } from "../structures/stats/TNTTagStatistics";
import { TeamSkyWarsStatistics } from "../structures/stats/TeamSkyWarsStatistics";
import { TheBridgeTotalStatistics } from "../structures/stats/TheBridgeTotalStatistics";
import { TheBridgeSoloStatistics } from "../structures/stats/TheBridgeSoloStatistics";
import { TheBridgeDoublesStatistics } from "../structures/stats/TheBridgeDoublesStatistics";
import { TheBridgeThreesStatistics } from "../structures/stats/TheBridgeThreesStatistics";
import { TheBridgeLegacyStatistics } from "../structures/stats/TheBridgeLegacyStatistics";
import { UHCStatistics } from "../structures/stats/UHCStatistics";
import { Statistics } from "../structures/main/Statistics";
import { TimeStringType } from "../structures/misc/TimeStringType";
import { filterIndexes } from "../utils/array-related";

export function appropiateParse(data: string) {
    if (
        data.includes("d") ||
        data.includes("h") ||
        data.includes("m") ||
        data.includes("s")
    ) {
        return data.split(/ +/g)
        .map(e => {
            const number = parseInt(e.match(/[0-9]+/g)?.at(0) ?? "0");
            const type = (e.match(/[a-zA-Z]/g)?.at(0) ?? "s") as TimeStringType;
            switch (type) {
                case "s": // seconds
                    return number * 1000;
                case "m": // minutes
                    return number * 1000 * 60;
                case "h": // hours
                    return number * 1000 * 60 * 60;
                default: // days
                    return number * 1000 * 60 * 60 * 24;
            }
        })
        .reduce((accumulated, current) => accumulated + current, 0)
    } else {
        return parseInt(data);
    }
}

export function getPlayerStatistics(serialized: string[]): Statistics {
    
    const indexes = filterIndexes(serialized, (e: string) => {
        return e.includes(`class="game-header-title`) ||
        e.includes(`<div class="game-content">`);
    });
    
    const raw = new Map<string, any>();
    let currentGamemodeKey = "";
    let currentStatKey = "";
    indexes.forEach((value, index) => {
        const isMinigameTitle = index % 2 === 0;
        if (isMinigameTitle) {
            // if (!minigames[serialized[value + 1] as keyof typeof minigames]) {
            //     console.log(`unknown key: ${serialized[value + 1]}`);
            // }
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
                    [currentStatKey]: appropiateParse(data)
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
        buildBattle: new BuildBattleStatistics(raw.get("buildBattle")),
        runFromTheBeast: new RunFromTheBeastStatistics(raw.get("runFromTheBeast")),
        partyGames: new PartyGamesStatistics(raw.get("partyGames")),
        hungerGames: new HungerGamesStatistics(raw.get("hungerGames")),
        skyPit: new SkyPitStatistics(raw.get("skyPit")),
        arenaPvP: new ArenaPvPStatistics(raw.get("arenaPvP")),
        uhc: new UHCStatistics(raw.get("uhc")),
        murderMystery: new MurderMysteryStatistics(raw.get("murderMystery")),
        captureTheWool: new CaptureTheWoolStatistics(raw.get("captureTheWool"))
    }

}