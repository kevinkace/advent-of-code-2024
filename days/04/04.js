export function getLetterIndices(string, letters) {
    const rows      = string.split("\n");
    const rowsCount = rows.length;
    const colsCount = rows[0].length;

    return { rows, rowsCount, colsCount };
}
