# 🌎 universocraft-scraper

No-dependency module for gathering player statistics from the hispanic Minecraft server UniversoCraft with good and safe typings, using web scraping.

# Usage

1. First, import the module:

    ```js
    // Using CommonJS
    const { queryUser } = require("universocraft-scraper");

    // Using TypeScript or ESM
    import { queryUser } from "speedtest-result-scraper";
    ```

2. Then, you can call the `queryUser` function by passing a valid username:

    ```js
    // Using promises
    queryUser("JustCarluX").then(query => console.log(query));

    // Using async/await
    const query = await queryUser("JustCarluX");
    console.log(query);

    // Expected
    {
        player: {
            username: 'JustCarluX',
            head: 'https://api.mineskin.org/render/head?url=http://textures.minecraft.net/texture/387314a97b1732d7eb2f8e1b14798df1ae38b6878620e9c15647042443bafdf7',
            skin: 'http://textures.minecraft.net/texture/387314a97b1732d7eb2f8e1b14798df1ae38b6878620e9c15647042443bafdf7',
            ranks: ['usuar', 'premium'],
            tags: []
        },
        statistics: {
            skyBlock: SkyBlockStatistics {
                generalLevel: 0,
                kills: 0,
                deaths: 0,
                unicoins: 0,
                bankAccount: 0,
                gems: 0,
                playedTime: 3000
            },
            theBridge: {
                total: [TheBridgeTotalStatistics],
                solo: [TheBridgeSoloStatistics],
                doubles: [TheBridgeDoublesStatistics],
                threes: [TheBridgeThreesStatistics],
                legacy: [TheBridgeLegacyStatistics]
            },
            destroyTheNexus: DestroyTheNexusStatistics {
                ...
            },
            skyWars: SkyWarsStatistics {
                ...
            },
            luckyWars: LuckyWarsStatistics {
                ...
            },
            eggWars: EggWarsStatistics {
                ...
            },
            bedwars: BedWarsStatistics {
                ...
            },
            teamSkywars: TeamSkyWarsStatistics {
                ...
            },
            speedBuilders: SpeedBuildersStatistics {
                ...
            },
            tntRun: TNTRunStatistics {
                ...
            },
            tntTag: TNTTagStatistics {
                ...
            },
            buildBattle: BuildBattleStatistics {
                ...
            },
            runFromTheBeast: RunFromTheBeastStatistics {
                ...
            },
            partyGames: PartyGamesStatistics {
                ...
            },
            hungerGames: HungerGamesStatistics {
                ...
            },
            skyPit: SkyPitStatistics {
                ...
            },
            arenaPvP: ArenaPvPStatistics {
                ...
            },
            uhc: UHCStatistics {
                ...
            },
            murderMystery: MurderMysteryStatistics {
                ...
            },
            captureTheWool: CaptureTheWoolStatistics {
                ...
            }
        }
    }
    ```

# API

# `queryUser`
```ts
queryUser(username: string): Promise<UserQuery | null>
```
Fetch statistics and player information from UniversoCraft given an username. Returns a `Promise` with an `UserQuery` object with the player information, or null if it was not found.

- UserQuery.player (`Player`): Basic information of the player.

```ts
interface Player {
    username: string, // Player username
    head: string, // Link of the player's head used in the statistics page, belongs to the Mineskin API
    skin: string, // Player skin texture link, grabbed from the head link
    ranks: Rank[], // List of player ranks
    tags: Tag[], // List of player tags
    lastSeen: Date | null // Date the player was last connected to the server
}
```

- UserQuery.statistics (`Statistics`): Statistics of the player on the server's minigames.

```ts
interface Statistics {
    skyBlock: SkyBlockStatistics,
    theBridge: {
        total: TheBridgeStatistics,
        solo: TheBridgeStatistics,
        doubles: TheBridgeStatistics,
        threes: TheBridgeStatistics,
        legacy: TheBridgeStatistics
    },
    destroyTheNexus: DestroyTheNexusStatistics,
    skyWars: SkyWarsStatistics,
    luckyWars: LuckyWarsStatistics,
    eggWars: EggWarsStatistics,
    bedwars: BedWarsStatistics,
    teamSkywars: TeamSkyWarsStatistics,
    speedBuilders: SpeedBuildersStatistics,
    tntRun: TNTRunStatistics,
    tntTag: TNTTagStatistics,
    buildBattle: BuildBattleStatistics,
    runFromTheBeast: RunFromTheBeastStatistics,
    partyGames: PartyGamesStatistics,
    hungerGames: HungerGamesStatistics,
    skyPit: SkyPitStatistics,
    arenaPvP: ArenaPvPStatistics,
    uhc: UHCStatistics,
    murderMystery: MurderMysteryStatistics,
    captureTheWool: CaptureTheWoolStatistics
}
```

Some notes:
- Every single statistic is parsed as a number automatically. `playedTime` properties are properly converted from the page's time string to milliseconds.
- It's not really clear what's the meaning of the number found in `yt` ranks. Probably varies depending on the YouTuber's popularity.