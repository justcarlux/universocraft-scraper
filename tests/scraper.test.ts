import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "fs";
import { TopRoutes, fetchTop, queryUserByUsername, queryUserByUuid } from "../src/index";
import path from "path";
import { UserQuery } from "../src/structures/main/UserQuery";
import { TopEntry } from "../src/structures/main/TopEntry";

const dataFolder = path.join(__dirname, "data");
try {
    if (!existsSync(dataFolder)) {
        mkdirSync(dataFolder);
    } else {
        const files = readdirSync(dataFolder);
        for (let index = 0; index < files.length; index++) {
            const file = files[index];
            if (file.endsWith(".json")) rmSync(path.join(dataFolder, file));
        }
    }
} catch (err) {}

export function saveInfo(info: UserQuery | TopEntry[] | null, filename: string) {
    if (!info) return;
    writeFileSync(
        path.join(__dirname, "data", filename),
        JSON.stringify(info, null, 4)
    )
}

// to avoid rate limiting
async function wait() {
    return await new Promise(resolve => {
        setTimeout(resolve, 2_000);
    });
}

test("query user (myself with nick)", async () => {
    await wait();
    const info = await queryUserByUsername("JustCarluX");
    const keys = Object.keys(info ?? {});
    saveInfo(info, "JustCarluX-1.json");
    return expect(
        keys.includes("player") &&
        keys.includes("statistics")
    ).toBeTruthy();
}, 15_000);

test("query user (myself with dashes)", async () => {
    await wait();
    const info = await queryUserByUuid("460e9c28f52f454891aac113059b98a2");
    const keys = Object.keys(info ?? {});
    saveInfo(info, "JustCarluX-2.json");
    return expect(
        keys.includes("player") &&
        keys.includes("statistics")
    ).toBeTruthy();
}, 15_000);

test("query user with tags", async () => {
    await wait();
    const info = await queryUserByUsername("denila");
    const keys = Object.keys(info ?? {});
    saveInfo(info, "denila.json");
    return expect(
        keys.includes("player") &&
        keys.includes("statistics") &&
        info?.player.tags.length
    ).toBeTruthy();
}, 15_000);

test("query a helper", async () => {
    await wait();
    const info = await queryUserByUsername("wSilv6r");
    const keys = Object.keys(info ?? {});
    saveInfo(info, "wSilv6r.json");
    return expect(
        keys.includes("player") &&
        keys.includes("statistics") &&
        info?.player.tags.length
    ).toBeTruthy();
}, 15_000);

test("query a builder", async () => {
    await wait();
    const info = await queryUserByUsername("4wdl");
    const keys = Object.keys(info ?? {});
    saveInfo(info, "4wdl.json");
    return expect(
        keys.includes("player") &&
        keys.includes("statistics") &&
        info?.player.tags.length
    ).toBeTruthy();
}, 15_000);

test("query user with hide and seek and pinturillo statistics", async () => {
    await wait();
    const info = await queryUserByUsername("gonzaestrella");
    const keys = Object.keys(info ?? {});
    saveInfo(info, "gonzaestrella.json");
    return expect(
        keys.includes("player") &&
        keys.includes("statistics") &&
        info?.statistics.hideAndSeek.wins &&
        info?.statistics.pinturillo.wins
    ).toBeTruthy();
}, 15_000);

test("query user with capture the wool statistics", async () => {
    await wait();
    const info = await queryUserByUsername("Yoo_eeL");
    const keys = Object.keys(info ?? {});
    saveInfo(info, "Yoo_eeL.json");
    return expect(
        keys.includes("player") &&
        keys.includes("statistics") &&
        info?.statistics.captureTheWool.wins
    ).toBeTruthy();
}, 15_000);

test("query user w/ 'eternal' last connection date", async () => {
    await wait();
    const info = await queryUserByUsername("Tauchet");
    const keys = Object.keys(info ?? {});
    saveInfo(info, "Tauchet.json");
    return expect(
        keys.includes("player") &&
        keys.includes("statistics") &&
        info?.player.ranks.includes("adm") &&
        info?.player.lastConnection === "eternal"
    ).toBeTruthy();
}, 15_000);

test("query user without last connection date", async () => {
    await wait();
    const info = await queryUserByUsername("Just");
    const keys = Object.keys(info ?? {});
    saveInfo(info, "Just.json");
    return expect(
        keys.includes("player") &&
        keys.includes("statistics") &&
        !info?.player.lastConnection
    ).toBeTruthy();
}, 15_000);

test("query non-existing user", async () => {
    await wait();
    const info = await queryUserByUsername("_");
    return expect(info).toBeNull();
}, 15_000);

test("get bedwars top (by wins) without pagination", async () => {
    await wait();
    const info = await fetchTop(TopRoutes.BedWars.Wins);
    saveInfo(info, "BedwarsWinsTop-Page1.json");
    return expect(info.length).toBeTruthy();
}, 15_000);

test("get bedwars top (by wins) with pagination", async () => {
    await wait();
    const info = await fetchTop(TopRoutes.BedWars.Wins, 5);
    saveInfo(info, "BedwarsWinsTop-Page5.json");
    return expect(info.length).toBeTruthy();
}, 15_000);