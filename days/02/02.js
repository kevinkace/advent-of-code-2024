export function testSafe(data) {
    let dir;

    return data.every((currValue, index, arr) => {
        const nextValue = arr[index + 1];

        // done! (watchout for 0)
        if (nextValue === undefined) {
            return true;
        }

        if (nextValue === currValue) {
            return false;
        }

        // first iteration, get direction
        if (!index) {
            dir = nextValue > currValue ? 1 : -1;
        }

        if (
            nextValue > (currValue * dir) &&
            Math.abs(nextValue - currValue) <= 3
        ) {
            return true;
        }

        return false;
    });
}

function safeValues(currValue, nextValue, dir) {
    // done! (watchout for 0)
    if (nextValue === undefined) {
        return true;
    }

    if (nextValue === currValue) {
        return false;
    }

    const currDir = nextValue > currValue ? 1 : -1;

    if (dir && currDir !== dir) {
        return false;
    }

    if (
        nextValue > (currValue * currDir) &&
        Math.abs(nextValue - currValue) <= 3
    ) {
        return currDir;
    }

    return false;
}

export function testSafeTolerance(data, tolerance = 1) {
    let dir;
    let faults = 0;

    for (let i = 0; i < data.length - 1; i++) {
        for (let j = i+1; j < data.length; j++) {
            let nextI = i + j;
            let currDir;

            currDir = safeValues(data[i], data[nextI], currDir);
            console.log({currDir})

            if (
                currDir === false ||
                dir && dir !== currDir
            ) {
                faults++;

                continue;
            }

            if (currDir === true) {
                break;
            }

            if (currDir === true) {
                return faults <= tolerance;
            }

            dir === dir || currDir;
        }

        console.log("end of outer loop")
    }

    return false;
}

export function validateDiffs(diffs) {
    let dir;

    return diffs.every(diff => {
        const currDir = diff > 0 ? 1 : -1;

        if (dir && dir !== currDir || diff === 0) {
            return false;
        }

        dir = currDir;

        return Math.abs(diff) <= 3;
    });
}

export function validateDiffsTolerance(diffs, tolerance = 1) {
    let dir;
    let faults = 0;


    // i is not incremented here!
    for (let i = 0; i < diffs.length; /* NOTHING */) {
        const currDiff = diffs[i];
        const currDir = currDiff > 0 ? 1 : -1;

        const invalid = dir && dir !== currDir || currDiff === 0 || Math.abs(currDiff) > 3;

        if (invalid) {
            faults++;

            diffs.splice(i, 1);
            diffs[i] = currDiff + diffs[i];

        } else {
            i++;
        }

        if (faults > tolerance) {
            return false;
        }

        dir = dir || currDir;
    }

    return true;
}

function getDir(diff) {
    return diff > 0 ? 1 : -1;
}

export function checkDirection(diffs) {
    if (diffs.join().includes("0")) {
        return false;
    }

    let dir = getDir(diffs[0]);

    return diffs.every(diff => (dir === getDir(diff)));
}

export function checkDistances(diffs, { max = 3 } = {}) {
    return diffs.every(diff => Math.abs(diff) <= max);
}


export function valDiffs2099(diffs) {
    return checkDirections(diffs) && checkDistances(diffs);
}