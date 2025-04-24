export function filterIndexes<T>(
    array: T[],
    checker: (element: T, index: number) => boolean
) {
    const result: number[] = [];
    while (true) {
        const index = array.findIndex((value, index) => {
            return checker(value, index) && !result.includes(index);
        });
        if (index === -1) break;
        result.push(index);
    }
    return result;
}
