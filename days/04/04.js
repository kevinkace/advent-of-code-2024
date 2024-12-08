import { walkString } from "../../utils/data-parsers";
import { letterAt }   from "../../utils/unparsed";

const dirs = {
    N  : { deltaX : 0, deltaY : -1 },
    NE : { deltaX : 1, deltaY : -1 },
    E  : { deltaX : 1, deltaY : 0 },
    SE : { deltaX : 1, deltaY : 1 },
    S  : { deltaX : 0, deltaY : 1 },
    SW : { deltaX : -1, deltaY : 1 },
    W  : { deltaX : -1, deltaY : 0 },
    NW : { deltaX : -1, deltaY : -1 }
};

const allDirs = Object.keys(dirs);

export function checkDir(string, word, dir, { row, col }) {
    const { deltaX, deltaY } = dirs[dir];

    return word.split("").every((letter, index) => {
        const x = col + deltaX * index;
        const y = row + deltaY * index;

        return letterAt(string, { row : y, col : x }) === letter;
    });
}

export function checkAtPosition(string, word, position) {
    const char = letterAt(string, position);

    if (char !== word[0]) {
        return 0;
    }

    return allDirs.reduce((acc, dir) => {
            return acc + (checkDir(string, word, dir, position) ? 1 : 0);
        }, 0);
}


export function checkWord(string, word) {
    let total = 0;

    walkString(string, (char, pos) => {
        const result = checkAtPosition(string, word, pos);

        // if (result) {
        //     console.log(pos, result);
        // }

        total += result;
    });

    return total;
}

export function getCorners(string, { row, col }) {
    const deltas = {
        nw : [ -1, -1 ],
        sw : [ -1, 1 ],
        se : [ 1, 1 ],
        ne : [ 1, -1 ]
    };

    return Object.entries(deltas).reduce((acc, [ key, [ rowDelta, colDelta ]]) => {
        const char = letterAt(string, { row : row + rowDelta, col : col + colDelta });

        acc[key] = char;

        return acc;
    }, {});
}


export function checkXPosition(string, xword, position) {
    const char       = letterAt(string, position);
    const middleChar = xword[1];
    const firstChar  = xword[0];
    const lastChar   = xword[2];

    if (char !== middleChar) {
        return 0;
    }

    const corners = getCorners(string, position);

    const cornersString = Object.values(corners).join("");

    return `${cornersString}${cornersString}`.includes(`${firstChar}${firstChar}${lastChar}${lastChar}`) ? 1 : 0;
}

export function checkXword(string, xword) {
    let total = 0;

    walkString(string, (char, pos) => {
        const result = checkXPosition(string, xword, pos);

        total += result;
    });

    return total;
}
