const mulRegex = /mul\(([0-9]*),([0-9]*)\)/g;
const doRegex = /do\(\)/g;
const dontRegex = /don\'t\(\)/g;

export function getMuls(input) {
    return [ ...input.matchAll(mulRegex) ];
}

export function getDoIndexes(input) {
    return [ ...input.matchAll(doRegex) ];
}

export function getDontIndexes(input) {
    return [ ...input.matchAll(dontRegex) ];
}

export function sumMuls(input) {

    const muls = getMuls(input);
    const doIndexes = getDoIndexes(input);
    const dontIndexes = getDontIndexes(input);

    const queue = [];

    muls.forEach(m => {
        queue[m.index] = m;
    });

    doIndexes.forEach(d => {
        queue[d.index] = d;
    });

    dontIndexes.forEach(d => {
        queue[d.index] = d;
    });

    let enabled = true;

    // console.log(queue);
    return queue.reduce((acc, q, i) => {
        if (q[0] === "do()") {
            enabled = true;
            return acc;
        } else if (q[0] === "don't()") {
            enabled = false;
            return acc;
        }

        if (!enabled) {
            return acc;
        }

        acc += Number(q[1]) * Number(q[2])

        return acc;
    }, 0);
}