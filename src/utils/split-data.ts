export function splitData(data: string) {
    let pushableString = "";
    const result: string[] = [];
    data.split("").forEach(e => {
        if (e == "<") {
            if (pushableString.trim()) result.push(pushableString.trim());
            pushableString = e;
        } else if (e == ">") {
            pushableString += e;
            result.push(pushableString.trim());
            pushableString = "";
        } else pushableString += e;
    });
    return result;
}
