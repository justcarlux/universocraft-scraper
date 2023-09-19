const baseURL = "https://stats.universocraft.com";

const TopRoutes = {
    "SkyBlock": {
        "Kills": "skyblock/kills",
        "Level": "skyblock/level"
    },
    "TheBridge": {
        "Kills": "thebridge/kills",
        "Goals": "thebridge/goals",
        "SoloWins": "thebridge/swins",
        "SoloKills": "thebridge/skills",
        "SoloGoals": "thebridge/sgoals",
        "DoublesWins": "thebridge/dwins",
        "DoublesKills": "thebridge/dkills",
        "DoublesGoals": "thebridge/dgoals",
        "ThreesWins": "thebridge/twins",
        "ThreesKills": "thebridge/tkills",
        "ThreesGoals": "thebridge/tgoals",
        "Wins": "thebridge/wins"
    },
    "DestroyTheNexus": {
        "Kills": "den/kills",
        "NexusDamage": "den/damage_nexus",
        "Wins": "den/wins"
    },
    "SkyWars": {
        "Kills": "skywars/kills",
        "Wins": "skywars/wins"
    },
    "LuckyWars": {
        "Kills": "luckywars/kills",
        "Wins": "luckywars/wins"
    },
    "EggWars": {
        "Kills": "eggwars/kills",
        "EggsBroken": "eggwars/eggs_broken",
        "Wins": "eggwars/wins"
    },
    "BedWars": {
        "Kills": "bedwars/kills",
        "FinalKills": "bedwars/final_kills",
        "BedsDestroyed": "bedwars/beds_destroyed",
        "Wins": "bedwars/wins"
    },
    "TeamSkyWars": {
        "Kills": "teamskywars/kills",
        "Wins": "teamskywars/wins"
    },
    "SpeedBuilders": {
        "PerfectBuilds": "speedbuilders/pbuilds",
        "Wins": "speedbuilders/wins"
    },
    "TNTRun": {
        "Wins": "tntrun/wins"
    },
    "TNTTag": {
        "Kills": "tnttag/kills",
        "Wins": "tnttag/wins"
    },
    "HideAndSeek": {
        "Kills": "escondite/kills",
        "Wins": "escondite/wins"
    },
    "Pinturillo": {
        "GuessedWords": "pinturillo/guessed_words",
        "Wins": "pinturillo/wins"
    },
    "BuildBattle": {
        "Points": "buildbattle/points",
        "Wins": "buildbattle/wins",
        "Score": "buildbattle/score"
    },
    "RunFromTheBeast": {
        "Kills": "edlb/kills",
        "WinsAsRunner": "edlb/rwins",
        "KillsAsRunner": "edlb/rkills",
        "WinsAsBeast": "edlb/bwins",
        "KillsAsBeast": "edlb/bkills",
        "Wins": "edlb/wins"
    },
    "PartyGames": {
        "Kills": "partygames/kills",
        "Wins": "partygames/wins"
    },
    "SurvivalGames": {
        "Kills": "sg/kills",
        "Wins": "sg/wins"
    },
    "SkyPit": {
        "Level": "skypit/level",
        "Kills": "skypit/kills"
    },
    "ArenaPvP": {
        "Kills": "arenapvp/kills",
        "GlobalElo": "arenapvp/global_elo",
        "Wins": "arenapvp/wins"
    },
    "UHC": {
        "Kills": "uhc/kills",
        "Wins": "uhc/wins"
    },
    "MurderMystery": {
        "Kills": "murdermystery/kills",
        "Wins": "murdermystery/wins"
    },
    "CaptureTheWool": {
        "MeleeKills": "ctw/melee_kills",
        "BowKills": "ctw/bow_kills",
        "MaximumBowKillDistance": "ctw/bow_distance_kill",
        "WoolPlaced": "ctw/wool_placed",
        "Score": "ctw/score"
    }
}

export { baseURL, TopRoutes }