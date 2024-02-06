const baseURL = "https://stats.universocraft.com";

const TopRoutes = {
    "PartyGames": {
        "Wins": "partygames/wins",
        "Kills": "partygames/kills"
    },
    "SpeedBuilders": {
        "Wins": "speedbuilders/wins",
        "PerfectBuilds": "speedbuilders/pbuilds"
    },
    "TeamSkyWars": {
        "Wins": "teamskywars/wins",
        "Kills": "teamskywars/kills"
    },
    "BuildBattle": {
        "Wins": "buildbattle/wins",
        "Points": "buildbattle/points"
    },
    "SkyPit": {
        "Kills": "skypit/kills",
        "Level": "skypit/level"
    },
    "TNTRun": {
        "Wins": "tntrun/wins"
    },
    "Pinturillo": {
        "Wins": "pinturillo/wins",
        "GuessedWords": "pinturillo/guessed_words"
    },
    "CaptureTheWool": {
        "Score": "ctw/score",
        "MeleeKills": "ctw/melee_kills",
        "BowKills": "ctw/bow_kills",
        "MaximumBowKillDistance": "ctw/bow_distance_kill",
        "WoolPlaced": "ctw/wool_placed",
        "DoubleWoolPlaced": "ctw/double_wool_placed"
    },
    "EggWars": {
        "Wins": "eggwars/wins",
        "Kills": "eggwars/kills",
        "EggsBroken": "eggwars/eggs_broken"
    },
    "DestroyTheNexus": {
        "Wins": "den/wins",
        "Kills": "den/kills",
        "NexusDamage": "den/damage_nexus"
    },
    "MurderMystery": {
        "Wins": "murdermystery/wins",
        "Kills": "murdermystery/kills"
    },
    "ArenaPvP": {
        "Wins": "arenapvp/wins",
        "Kills": "arenapvp/kills",
        "GlobalElo": "arenapvp/global_elo"
    },
    "SkyWars": {
        "Wins": "skywars/wins",
        "Kills": "skywars/kills"
    },
    "UHC": {
        "Wins": "uhc/wins",
        "Kills": "uhc/kills"
    },
    "SurvivalGames": {
        "Wins": "sg/wins",
        "Kills": "sg/kills"
    },
    "TNTTag": {
        "Wins": "tnttag/wins",
        "Kills": "tnttag/kills"
    },
    "SkyBlock": {
        "Level": "skyblock/level",
        "Kills": "skyblock/kills"
    },
    "BedWars": {
        "Wins": "bedwars/wins",
        "Kills": "bedwars/kills",
        "FinalKills": "bedwars/final_kills",
        "BedsDestroyed": "bedwars/beds_destroyed"
    },
    "RunFromTheBeast": {
        "Wins": "edlb/wins",
        "Kills": "edlb/kills",
        "WinsAsRunner": "edlb/rwins",
        "KillsAsRunner": "edlb/rkills",
        "WinsAsBeast": "edlb/bwins",
        "KillsAsBeast": "edlb/bkills"
    },
    "LuckyWars": {
        "Wins": "luckywars/wins",
        "Kills": "luckywars/kills"
    },
    "HideAndSeek": {
        "Wins": "escondite/wins",
        "Kills": "escondite/kills"
    },
    "TheBridge": {
        "TotalWins": "thebridge/wins",
        "SoloWins": "thebridge/swins",
        "DoublesWins": "thebridge/dwins",
        "ThreesWins": "thebridge/twins",
        "TotalKills": "thebridge/kills",
        "SoloKills": "thebridge/skills",
        "DoublesKills": "thebridge/dkills",
        "ThreesKills": "thebridge/tkills",
        "TotalGoals": "thebridge/goals",
        "SoloGoals": "thebridge/sgoals",
        "DoublesGoals": "thebridge/dgoals",
        "ThreesGoals": "thebridge/tgoals"
    }
}

export { baseURL, TopRoutes }