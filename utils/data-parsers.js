const EOL = "\n";

export function splitToLists(data) {
    const delim = "   ";

    return data.split(EOL).map(line => line.split(delim)).reduce((acc, cur) => {
        acc[0].push(Number(cur[0]));
        acc[1].push(Number(cur[1]));

        return acc;
    }, [[], []]);
}

export function parse2d(data) {
    const delim = " ";

    return data.split(EOL).map(line => line.split(delim).map(n => Number(n)));
}

export function walkString(string, cb) {
    string.split(EOL).forEach((rowChars, row) => {
        rowChars.split("").forEach((char, col) => {
            cb(char, { row, col });
        });
    });
}
