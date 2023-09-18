import { existsSync, mkdirSync, writeFileSync } from "fs";
import { queryUser } from "../src/index";
import path from "path";
import { UserQuery } from "../src/structures/main/UserQuery";

try {
    if (!existsSync(path.join(__dirname, "data"))) {
        mkdirSync(path.join(__dirname, "data"));
    }
} catch (err) {}

export function saveInfo(info: UserQuery | null) {
    if (!info) return;
    writeFileSync(
        path.join(__dirname, "data", `${info?.player.username}.json`),
        JSON.stringify(info, null, 4)
    )
}

test("query user", async () => {
    const info = await queryUser("JustCarluX");
    const keys = Object.keys(info ?? {});
    saveInfo(info);
    return expect(
        keys.includes("player") &&
        keys.includes("statistics")
    ).toBeTruthy();
}, 15_000);

test("query user with tags", async () => {
    const info = await queryUser("wMal");
    const keys = Object.keys(info ?? {});
    saveInfo(info);
    return expect(
        keys.includes("player") &&
        keys.includes("statistics") &&
        info?.player.tags.length
    ).toBeTruthy();
}, 15_000);

test("query an admin w/ no last seen date", async () => {
    const info = await queryUser("Tauchet");
    const keys = Object.keys(info ?? {});
    saveInfo(info);
    return expect(
        keys.includes("player") &&
        keys.includes("statistics") &&
        info?.player.ranks.includes("admin") &&
        !info?.player.lastSeen
    ).toBeTruthy();
}, 15_000);

test("query non-existing user", async () => {
    const info = await queryUser("_");
    return expect(info).toBeNull();
}, 15_000);