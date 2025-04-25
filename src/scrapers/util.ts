export function parseSkinData(text: string) {
    const head =
        text
            ?.match(/https:\/\/.+"\s/g)
            ?.at(0)
            ?.slice(0, -2) ?? null;
    if (!head) return { head: null, skin: null };
    const skin = ((): string | null => {
        try {
            return new URL(head as string).searchParams.get("url");
        } catch (err) {}
        return null;
    })();
    return { head, skin };
}

export function appropiateStatParse(data: string) {
    if (
        data.includes("d") ||
        data.includes("h") ||
        data.includes("m") ||
        data.includes("s")
    ) {
        return data
            .split(/ +/g)
            .map(e => {
                const number = parseInt(e.match(/[0-9]+/g)?.at(0) ?? "0");
                const type = (e.match(/[a-zA-Z]/g)?.at(0) ?? "s") as
                    | "d"
                    | "h"
                    | "m"
                    | "s";
                switch (type) {
                    case "s": // seconds
                        return number * 1000;
                    case "m": // minutes
                        return number * 1000 * 60;
                    case "h": // hours
                        return number * 1000 * 60 * 60;
                    default: // days
                        return number * 1000 * 60 * 60 * 24;
                }
            })
            .reduce((accumulated, current) => accumulated + current, 0);
    } else {
        return parseFloat(data.split(",").join(""));
    }
}

function getHoursMinutesAndGMT(text: string) {
    const [hour, type, gmt] = text.split(/ +/g);
    const split = hour.split(":");
    const data = {
        hours: parseInt(split[0]),
        minutes: parseInt(split[1]),
        gmt: parseInt(gmt.match(/(\+|-)\d+/g)?.at(0) ?? "0")
    };
    if (type.includes("p.m.")) data.hours += 12;
    return data;
}

const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Setiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];

function getDayMonthAndYear(text: string) {
    const [day, month, year] = text.split(/del|de/).map(e => e.trim());
    return {
        day: parseInt(day),
        month: months.includes(month) ? months.indexOf(month) : 0,
        year: parseInt(year)
    };
}

export function parseLastSeenTimeString(text: string, separator: string) {
    if (!text || text === "...") return null;
    if (text.includes("Eternidad")) return "eternal";
    const [dateString, timeString] = text.split(separator);

    const { hours, minutes, gmt: suppliedGMT } = getHoursMinutesAndGMT(timeString.trim());
    const { day, month, year } = getDayMonthAndYear(dateString);

    const date = new Date(year, month, day, hours, minutes);
    const currentGMT = new Date().getTimezoneOffset() / 60;
    const difference = (currentGMT + suppliedGMT - 1) * 1000 * 60 * 60;
    return new Date(date.getTime() - difference);
}
