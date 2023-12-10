export function appropiateStatParse(data: string) {
    if (
        data.includes("d") ||
        data.includes("h") ||
        data.includes("m") ||
        data.includes("s")
    ) {
        return data.split(/ +/g)
        .map(e => {
            const number = parseInt(e.match(/[0-9]+/g)?.at(0) ?? "0");
            const type = (e.match(/[a-zA-Z]/g)?.at(0) ?? "s") as ("d" | "h" | "m" | "s");
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
        .reduce((accumulated, current) => accumulated + current, 0)
    } else {
        return parseFloat(data);
    }
}

function getHoursAndMinutes(text: string) {
    const [hour, type] = text.split(/ +/g);
    const split = hour.split(":");
    const data = { hours: parseInt(split[0]), minutes: parseInt(split[1]) }
    if (type.includes("a.m.")) return data;
    return { hours: 12 + data.hours, minutes: data.minutes };
}

const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic"
]

function getDayMonthAndYear(text: string) {
    const [day, month, year] = text.split("-");
    return {
        day: parseInt(day),
        month: months.includes(month) ? months.indexOf(month) : 0,
        year: parseInt(year)
    }
}

export function parseLastSeenTimeString(text: string) {

    if (text.includes("Eterna")) return null;
    const [timeString, dateString] = text.split("del");
    const { hours, minutes } = getHoursAndMinutes(timeString.trim());
    
    const dateStringSplit = dateString.trim().split(/ +/g);
    const currentGMT = new Date().getTimezoneOffset() / 60;
    const suppliedGMT = parseInt(dateStringSplit?.at(1)?.match(/(\+|-)\d+/g)?.at(0) ?? "0");
    const { day, month, year } = getDayMonthAndYear(dateStringSplit[0].trim());

    const date = new Date(year, month, day, hours, minutes);
    const difference = (currentGMT + suppliedGMT) * 1000 * 60 * 60;
    return new Date(date.getTime() - difference);
    
}