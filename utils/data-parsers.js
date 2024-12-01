const EOL = "\n";
const DELIM = "   ";

export function splitToLists(data, { eol = EOL, delim = DELIM } = {}) {
    return data.split(eol).map(line => line.split(delim)).reduce((acc, cur) => {
        acc[0].push(Number(cur[0]));
        acc[1].push(Number(cur[1]));

        return acc;
    }, [[], []]);
}
