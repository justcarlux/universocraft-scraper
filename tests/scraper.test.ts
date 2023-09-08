import { queryUser } from "../src/index";

test("query user", async () => {
    const info = await queryUser("JustCarluX");
    const keys = Object.keys(info ?? {});
    expect(keys.includes("player") && keys.includes("statistics")).toBeTruthy();
}, 15_000);

test("query user with tags", async () => {
    const info = await queryUser("wMal");
    expect(info?.player.tags.length).toBeTruthy();
}, 15_000);

test("query non-existing user", async () => {
    const info = await queryUser("_");
    expect(info).toBeNull();
}, 15_000);