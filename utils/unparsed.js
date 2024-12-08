
const EOL = "\r\n";

export function letterInbounds(string, { row, col }) {
    const rows = string.split(EOL);

    return row >= 0 && row < rows.length && col >= 0 && col < rows[0].length;
}

export function letterAt(string, { row, col }) {
    if (!letterInbounds(string, { row, col })) {
        return;
    }

    const rows = string.split(EOL);

    return rows[row][col];
}

export function numberRows(string) {
    return string.split(EOL)[0].length;
}
