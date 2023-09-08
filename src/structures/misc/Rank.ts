export const availableRanks = [
    "usuar",
    "premium",
    "jupit",
    "neptu",
    "mercu",
    "satur",
    "yt1",
    "yt2",
    "yt3",
    "yt4",
    "strea",
    "moder",
    "admin"
] as const;

export type Rank = typeof availableRanks[number];