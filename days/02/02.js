import { arrToDiffs } from "../../utils/lists";

function getDir(diff) {
    return diff > 0 ? 1 : -1;
}

export function checkDirections(diffs) {
    if (diffs.join().includes("0")) {
        return false;
    }

    let dir = getDir(diffs[0]);

    return diffs.every(diff => (dir === getDir(diff)));
}

export function checkDistances(diffs, { max = 3 } = {}) {
    return diffs.every(diff => Math.abs(diff) <= max);
}


export function valDiffs(diffs) {
    return checkDirections(diffs) && checkDistances(diffs);
}

export function validateRows(allRows) {
    return allRows.map(row => {
        const diffs = arrToDiffs(row);

        return valDiffs(diffs);
    });
}

export function validRowCount(allRows) {
    return validateRows(allRows).filter(Boolean).length;
}