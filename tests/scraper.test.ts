import { existsSync, mkdirSync, writeFileSync } from "fs";
import { TopRoutes, fetchTop, queryUserByUsername, queryUserByUuid } from "../src/index";
import path from "path";
import { UserQuery } from "../src/structures/main/UserQuery";
import { TopEntry } from "../src/structures/main/TopEntry";

const delay = 1_500;

try {
    if (!existsSync(path.join(__dirname, "data"))) {
        mkdirSync(path.join(__dirname, "data"));
    }
} catch (err) {}

export function saveInfo(info: UserQuery | TopEntry[] | null, filename: string) {
    if (!info) return;
    writeFileSync(
        path.join(__dirname, "data", filename),
        JSON.stringify(info, null, 4)
    )
}

async function wait(ms: number) {
    return await new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

test("query user (myself)", async () => {
    await wait(delay); // to avoid rate limiting
    const info = await queryUserByUsername("JustCarluX");
    const keys = Object.keys(info ?? {});
    saveInfo(info, "JustCarluX-1.json");
    return expect(
        keys.includes("player") &&
        keys.includes("statistics")
    ).toBeTruthy();
}, 15_000);

test("query user (myself, uuid w/ dashes)", async () => {
    await wait(delay); // to avoid rate limiting
    const info = await queryUserByUuid("460e9c28-f52f-4548-91aa-c113059b98a2");
    const keys = Object.keys(info ?? {});
    saveInfo(info, "JustCarluX-2.json");
    return expect(
        keys.includes("player") &&
        keys.includes("statistics")
    ).toBeTruthy();
}, 15_000);


test("query user (myself, uuid without dashes)", async () => {
    await wait(delay); // to avoid rate limiting
    const info = await queryUserByUuid("460e9c28f52f454891aac113059b98a2", true);
    const keys = Object.keys(info ?? {});
    saveInfo(info, "JustCarluX-3.json");
    return expect(
        keys.includes("player") &&
        keys.includes("statistics")
    ).toBeTruthy();
}, 15_000);


test("query user with tags", async () => {
    await wait(delay);
    const info = await queryUserByUsername("wMal");
    const keys = Object.keys(info ?? {});
    saveInfo(info, "wMal.json");
    return expect(
        keys.includes("player") &&
        keys.includes("statistics") &&
        info?.player.tags.length
    ).toBeTruthy();
}, 15_000);

test("query user with hide and seek and pinturillo statistics", async () => {
    await wait(delay);
    const info = await queryUserByUsername("JeanJxmxn");
    const keys = Object.keys(info ?? {});
    saveInfo(info, "JeanJxmxn.json");
    return expect(
        keys.includes("player") &&
        keys.includes("statistics") &&
        info?.statistics.hideAndSeek.unicoins &&
        info?.statistics.pinturillo.wins
    ).toBeTruthy();
}, 15_000);

test("query an admin w/ no last seen date", async () => {
    await wait(delay);
    const info = await queryUserByUsername("Tauchet");
    const keys = Object.keys(info ?? {});
    saveInfo(info, "Tauchet.json");
    return expect(
        keys.includes("player") &&
        keys.includes("statistics") &&
        info?.player.ranks.includes("admin") &&
        !info?.player.lastSeen
    ).toBeTruthy();
}, 15_000);

test("query non-existing user", async () => {
    await wait(delay);
    const info = await queryUserByUsername("_");
    return expect(info).toBeNull();
}, 15_000);

test("get bedwars top (by wins) without pagination", async () => {
    await wait(delay);
    const info = await fetchTop({
        route: TopRoutes.BedWars.Wins
    });
    saveInfo(info, "BedwarsWinsTop-Page1.json");
    return expect(info.length).toBeTruthy();
}, 15_000);

test("get bedwars top (by wins) with pagination", async () => {
    await wait(delay);
    const info = await fetchTop({
        route: TopRoutes.BedWars.Wins,
        page: 5
    });
    saveInfo(info, "BedwarsWinsTop-Page5.json");
    return expect(info.length).toBeTruthy();
}, 15_000);