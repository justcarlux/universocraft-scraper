# 🌎 universocraft-scraper

Scrap almost anything from the hispanic Minecraft server [UniversoCraft's statistics page](https://stats.universocraft.com/) with a good API.

# Usage

1. First, import the module. For instance, we'll use the `queryUserByUsername` function:

    ```js
    // Using CommonJS
    const { queryUserByUsername } = require("universocraft-scraper");

    // Using TypeScript or ESM
    import { queryUserByUsername } from "universocraft-scraper";
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
                "usu",
                "premium"
            ],
            "tags": [],
            "lastConnection": "2024-02-05T22:14:00.000Z",
            "lastVersion": "1.8.9",
            "firstConnection": "2019-03-27T07:10:00.000Z",
            "friends": 4
        },
        "statistics": {
            "partyGames": { ... },
            "speedBuilders": { ... },
            "teamSkyWars": { ... },
            "buildBattle": { ... },
            "skyPit": { ... },
            "tntRun": { ... },
            "pinturillo": { ... },
            "captureTheWool": { ... },
            "eggWars": { ... },
            "destroyTheNexus": { ... },
            "murderMystery": { ... },
            "arenaPvP": { ... },
            "skyWars": { ... },
            "uhc": { ... },
            "survivalGames": { ... },
            "tntTag": { ... },
            "skyBlock": { ... },
            "bedWars": { ... },
            "runFromTheBeast": { ... },
            "luckyWars": { ... },
            "hideAndSeek": { .. },
            "theBridge": {
                "total": { ... },
                "solo": { ... },
                "doubles": { ... },
                "threes": { ... },
                "legacy": { ... }
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
queryUserByUuid(uuid: string): Promise<UserQuery | null>
```

Fetch statistics and player information from UniversoCraft given a Minecraft profile UUID.

- uuid (`string`): Minecraft profile UUID of the player.

Both functions return a `Promise` with an `UserQuery` object with the player information, or null if it was not found. Throws an error when the page doesn't return any data or or when the `fetch` fails.

- UserQuery.player (`Player`): Basic information of the player.

```ts
interface Player {
    username: string; // Player username
    head: string; // Link of the player's head used in the statistics page, belongs to the Mineskin API
    skin: string; // Player skin texture link, grabbed from the head link
    ranks: Rank[]; // List of player ranks
    tags: Tag[]; // List of player tags
    lastConnection: Date | "eternal" | null; // Date when the player last connected to the server. Equals to `null` if the date is unknown or "eternal" if the page shows that as a date
    lastVersion: string; // Last Minecraft version the player used to connect to the server
    firstConnection: Date | "eternal" | null; // Date when the player first connected to the server. Equals to `null` if the date is unknown or "eternal" if the page shows that as a date
    friends: number; // Player friend count
}
```

- UserQuery.statistics (`Statistics`): Statistics of the player in the server's minigames.

```ts
interface Statistics {
    partyGames: PartyGamesStatistics;
    speedBuilders: SpeedBuildersStatistics;
    teamSkyWars: TeamSkyWarsStatistics;
    buildBattle: BuildBattleStatistics;
    skyPit: SkyPitStatistics;
    tntRun: TNTRunStatistics;
    pinturillo: PinturilloStatistics;
    captureTheWool: CaptureTheWoolStatistics;
    eggWars: EggWarsStatistics;
    destroyTheNexus: DestroyTheNexusStatistics;
    murderMystery: MurderMysteryStatistics;
    arenaPvP: ArenaPvPStatistics;
    skyWars: SkyWarsStatistics;
    uhc: UHCStatistics;
    survivalGames: SurvivalGamesStatistics;
    tntTag: TNTTagStatistics;
    skyBlock: SkyBlockStatistics;
    bedWars: BedWarsStatistics;
    runFromTheBeast: RunFromTheBeastStatistics;
    luckyWars: LuckyWarsStatistics;
    hideAndSeek: HideAndSeekStatistics;
    theBridge: {
        total: TheBridgeTotalStatistics;
        solo: TheBridgeSoloStatistics;
        doubles: TheBridgeDoublesStatistics;
        threes: TheBridgeThreesStatistics;
        legacy: TheBridgeLegacyStatistics;
    };
}
```

**Note:** Every single statistic is parsed as a number automatically. `playedTime` properties are properly converted from the page's time string to milliseconds.

# `fetchTop`

```ts
fetchTop(route: string, page?: number): Promise<TopEntry[]>
```

Fetch top entries given a route from UniversoCraft.

- route (`string`): Page route where to fetch top entries from. It's recommended/intented to use the exported constant `TopRoutes` to find a route to fetch from. Either way, you can pass one manually.
- page (optional, `number`): Top page number, must be between 1 and 20. Defaults to **1**.

```ts
// Examples:
fetchTop(TopRoutes.BedWars.Wins);
fetchTop(TopRoutes.SkyWars.Kills);
fetchTop("uhc/kills", 2);
```

Returns a `Promise` with an array of the `TopEntry` object with the information, or null if it was not found. Throws an error if the `page` argument is invalid, when the page doesn't return any data or when the `fetch` fails.

- TopEntry.position (`number`): Player top position relative to the page index.
- TopEntry.username (`string`): Player username.
- TopEntry.value (`number`): Statistic number.
- TopEntry.url (`string`): Player's profile URL.
- TopEntry.head (`string | null`): Link of the player's head used in the statistics page, belongs to the Mineskin API (only available for players in the top 5).
- TopEntry.skin (`string | null`): Player skin texture link, grabbed from the head link (only available for players in the top 5).
