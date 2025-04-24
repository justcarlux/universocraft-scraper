const baseURL = "https://stats.universocraft.com";

const TopRoutes = {
    PartyGames: {
        Wins: "partygames/wins",
        Kills: "partygames/kills"
    },
    SpeedBuilders: {
        Wins: "speedbuilders/wins",
        PerfectBuilds: "speedbuilders/pbuilds"
    },
    TeamSkyWars: {
        Wins: "teamskywars/wins",
        Kills: "teamskywars/kills"
    },
    BuildBattle: {
        Wins: "buildbattle/wins",
        Points: "buildbattle/points"
    },
    SkyPit: {
        Kills: "skypit/kills",
        Level: "skypit/level"
    },
    TNTRun: {
        Wins: "tntrun/wins"
    },
    Pinturillo: {
        Wins: "pinturillo/wins",
        GuessedWords: "pinturillo/guessed_words"
    },
    CaptureTheWool: {
        Score: "ctw/score",
        MeleeKills: "ctw/melee_kills",
        BowKills: "ctw/bow_kills",
        MaximumBowKillDistance: "ctw/bow_distance_kill",
        WoolPlaced: "ctw/wool_placed",
        DoubleWoolPlaced: "ctw/double_wool_placed"
    },
    EggWars: {
        Wins: "eggwars/wins",
        Kills: "eggwars/kills",
        EggsBroken: "eggwars/eggs_broken"
    },
    DestroyTheNexus: {
        Wins: "den/wins",
        Kills: "den/kills",
        NexusDamage: "den/damage_nexus"
    },
    MurderMystery: {
        Wins: "murdermystery/wins",
        Kills: "murdermystery/kills"
    },
    ArenaPvP: {
        Wins: "arenapvp/wins",
        Kills: "arenapvp/kills",
        GlobalElo: "arenapvp/global_elo"
    },
    SkyWars: {
        Wins: "skywars/wins",
        Kills: "skywars/kills"
    },
    UHC: {
        Wins: "uhc/wins",
        Kills: "uhc/kills"
    },
    SurvivalGames: {
        Wins: "sg/wins",
        Kills: "sg/kills"
    },
    TNTTag: {
        Wins: "tnttag/wins",
        Kills: "tnttag/kills"
    },
    SkyBlock: {
        Level: "skyblock/level",
        Kills: "skyblock/kills"
    },
    BedWars: {
        Wins: "bedwars/wins",
        Kills: "bedwars/kills",
        FinalKills: "bedwars/final_kills",
        BedsDestroyed: "bedwars/beds_destroyed"
    },
    RunFromTheBeast: {
        Wins: "edlb/wins",
        Kills: "edlb/kills",
        WinsAsRunner: "edlb/rwins",
        KillsAsRunner: "edlb/rkills",
        WinsAsBeast: "edlb/bwins",
        KillsAsBeast: "edlb/bkills"
    },
    LuckyWars: {
        Wins: "luckywars/wins",
        Kills: "luckywars/kills"
    },
    HideAndSeek: {
        Wins: "escondite/wins",
        Kills: "escondite/kills"
    },
    TheBridge: {
        TotalWins: "thebridge/wins",
        SoloWins: "thebridge/swins",
        DoublesWins: "thebridge/dwins",
        ThreesWins: "thebridge/twins",
        TotalKills: "thebridge/kills",
        SoloKills: "thebridge/skills",
        DoublesKills: "thebridge/dkills",
        ThreesKills: "thebridge/tkills",
        TotalGoals: "thebridge/goals",
        SoloGoals: "thebridge/sgoals",
        DoublesGoals: "thebridge/dgoals",
        ThreesGoals: "thebridge/tgoals"
    },
    TurfWars: {
        Wins: "turfwars/wins",
        Kills: "turfwars/kills"
    }
};

const MinigamesNames = {
    "Party Games": "partyGames",
    SpeedBuilders: "speedBuilders",
    TeamSkyWars: "teamSkyWars",
    BuildBattle: "buildBattle",
    SkyPit: "skyPit",
    TNTRun: "tntRun",
    Pinturillo: "pinturillo",
    "Captura la Lana": "captureTheWool",
    EggWars: "eggWars",
    "Destruye el Nexus": "destroyTheNexus",
    MurderMystery: "murderMystery",
    ArenaPvP: "arenaPvP",
    SkyWars: "skyWars",
    UHC: "uhc",
    "Juegos del Hambre": "survivalGames",
    TNTTag: "tntTag",
    SkyBlock: "skyBlock",
    BedWars: "bedWars",
    "Escapa de la Bestia": "runFromTheBeast",
    LuckyWars: "luckyWars",
    Escondite: "hideAndSeek",
    TheBridge: "theBridge",
    TurfWars: "turfWars"
};

const StatNames = {
    "nivel general": "generalLevel",
    asesinatos: "kills",
    muertes: "deaths",
    unicoins: "unicoins",
    "cuenta de banco": "bankAccount",
    gemas: "gems",
    "tiempo jugado": "playedTime",
    victorias: "wins",
    goles: "goals",
    "asesinatos con arco": "killsWithBow",
    "daños al nexus": "nexusDamage",
    "destrucciones del nexus": "nexusDestructions",
    "bloques colocados": "placedBlocks",
    "bloques destruidos": "brokenBlocks",
    "menas destruidas": "brokenOres",
    "troncos destruidos": "brokenLogs",
    "projectiles lanzados": "launchedProjectiles",
    "projectiles impactados": "landedProjectiles",
    "huevos rotos": "brokenEggs",
    "asesinatos finales": "finalKills",
    "camas destruidas": "brokenBeds",
    "muertes finales": "finalDeaths",
    "partidas jugadas": "playedGames",
    perdidas: "losses",
    "construcciones perfectas": "perfectBuilds",
    puntaje: "score",
    "victorias totales": "totalWins",
    "victorias como corredor": "winsAsRunner",
    "victorias como bestia": "winsAsBeast",
    "asesinato como corredor": "killsAsRunner",
    "asesinato como bestia": "killsAsBeast",
    nivel: "level",
    asistencias: "assistances",
    "distancia máxima de muerte con arco": "maximumBowKillDistance",
    "lanas colocadas": "placedWools",
    "palabras correctas": "correctWords",
    defensas: "defenses",
    "doble lanas": "doubleWools",
    karma: "karma",
    kdr: "kdr"
};

export { baseURL, TopRoutes, MinigamesNames, StatNames };
