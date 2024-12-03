function isPos(dir) {
    return dir === 1;
}

function isNeg(dir) {
    return dir === -1;
}


export function testSafe(data) {
    let dir; // positive

    return data.every((currValue, index, arr) => {
        const nextValue = arr[index + 1];

        if (!nextValue) {
            return true;
        }

        // first iteration, get direction
        if (!index) {
            dir = nextValue > currValue ? 1 : -1;
        }

        // positive
        if (
            isPos(dir) &&
            nextValue > currValue &&
            nextValue - currValue <= 3
        ) {
            return true;
        }

        // negative
        if (
            isNeg(dir) &&
            nextValue < currValue &&
            currValue - nextValue <= 3
        ) {
            return true;
        }

        return false;
    });
}