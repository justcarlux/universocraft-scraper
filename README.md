# 🌎 universocraft-scraper

Scrap almost anything from the hispanic Minecraft server [UniversoCraft's statistics page](https://stats.universocraft.com/) with a good API.

# Usage

1. First, import the module. For instance, we'll use the `queryUserByUsername` function:

    ```js
    // Using CommonJS
    const { queryUserByUsername } = require("universocraft-scraper");

    // Using TypeScript or ESM
    import { queryUserByUsername } from "speedtest-result-scraper";
    ```

2. Then, you can call any function by passing the required arguments:

    ```js
    // Using promises
    queryUserByUsername("JustCarluX").then(query => console.log(query));

    // Using async/await
    const query = await queryUserByUsername("JustCarluX");
    console.log(query);

    // Expected
    {
        "player": {
            "username": "JustCarluX",
            "head": "https://api.mineskin.org/render/head?url=http://textures.minecraft.net/texture/387314a97b1732d7eb2f8e1b14798df1ae38b6878620e9c15647042443bafdf7",
            "skin": "http://textures.minecraft.net/texture/387314a97b1732d7eb2f8e1b14798df1ae38b6878620e9c15647042443bafdf7",
            "ranks": [
                "usuar",
                "premium"
            ],
            "tags": [],
            "lastSeen": "2023-09-18T17:59:00.000Z"
        },
        "statistics": {
            "skyBlock": {
                ...
            },
            "theBridge": {
                "total": {
                    ...
                },
                "solo": {
                    ...
                },
                "doubles": {
                    ...
                },
                "threes": {
                    ...
                },
                "legacy": {
                    ...
                }
            },
            "destroyTheNexus": {
                ...
            },
            "skyWars": {
                ...
            },
            "luckyWars": {
                ...
            },
            "eggWars": {
                ...
            },
            "bedWars": {
                ...
            },
            "teamSkywars": {
                ...
            },
            "speedBuilders": {
                ...
            },
            "tntRun": {
                ...
            },
            "tntTag": {
                ...
            },
            "hideAndSeek": {
                ...
            },
            "pinturillo": {
                ...
            },
            "buildBattle": {
                ...
            },
            "runFromTheBeast": {
                ...
            },
            "partyGames": {
                ...
            },
            "survivalGames": {
                ...
            },
            "skyPit": {
                ...
            },
            "arenaPvP": {
                ...
            },
            "uhc": {
                ...
            },
            "murderMystery": {
                ...
            },
            "captureTheWool": {
                ...
            }
        }
    }
    ```

# API

# `queryUserByUsername` - `queryUserByUuid`
```ts
queryUserByUsername(username: string): Promise<UserQuery | null>
```
Fetch statistics and player information from UniversoCraft given an username.
- username (`string`): Username of the player.

```ts
queryUserByUuid(uuid: string, addUuidDashes?: boolean): Promise<UserQuery | null>
```
Fetch statistics and player information from UniversoCraft given a Minecraft profile UUID.
- uuid (`string`): Minecraft UUID of the player.
- addUuidDashes (`string`): Manually add the dashes needed for the UUID to work.

Both functions return a `Promise` with an `UserQuery` object with the player information, or null if it was not found.

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

- UserQuery.statistics (`Statistics`): Statistics of the player in the server's minigames.

```ts
interface Statistics {
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
```

Some notes:
- Every single statistic is parsed as a number automatically. `playedTime` properties are properly converted from the page's time string to milliseconds.
- It's not really clear what's the meaning of the number found in `yt` ranks. Probably varies depending on the YouTuber's popularity.

# `fetchTop`
```ts
fetchTop(options: FetchTopOptions): Promise<TopEntry[]>
```
Fetch top entries given a route from UniversoCraft.
- options.route (`string`): Page route where to fetch top entries from. It's recommended/intented to use the exported constant `TopRoutes` to find a route to fetch from. Either way, you can pass one manually.
```ts
// Examples:
fetchTop({ route: TopRoutes.BedWars.Wins })
fetchTop({ route: TopRoutes.SkyWars.Kills })
fetchTop({ route: "uhc/kills" }) */
```
- options.page (optional, `number`): Top page number. Defaults to **1**.

Returns a `Promise` with an array of the `TopEntry` object with the information, or null if it was not found.

- TopEntry.position (`number`): Player top position relative to the page index.
- TopEntry.username (`string`): Player username.
- TopEntry.value (`number`): Statistic number.
- TopEntry.url (`string`): Player's profile URL.