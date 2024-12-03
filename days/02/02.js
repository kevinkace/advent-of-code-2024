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