import { writeFileSync } from "fs";
import { get }           from "http";
import path              from "path";

const EOL = require("os").EOL;

export function getDim(map) {
    const rows = map.split(EOL);

    return {
        rows : rows.length,
        cols : rows[0].length
    };
}

export function charAt(map, { x, y }) {
    const { rows } = getDim(map);

    return map.replaceAll(EOL, "").charAt(y * rows + x);
}

export function setChar(map, { x, y }, char) {
    const rows = map.split(EOL);

    rows[y] = `${rows[y].substring(0, x)}${char}${rows[y].substring(x + 1)}`;

    return rows.join(EOL);
}

export function inBounds(map, { x, y }) {
    const { rows, cols } = getDim(map);

    return x >= 0 && x < cols && y >= 0 && y < rows;
}

/**
 * Rotate a direction by 90 degrees.
 * @param {Object} delta - The current direction
 * @param {Number} delta.dx - The x component of the direction
 * @param {Number} delta.dy - The y component of the direction
 * @param {"CW"|"CCW"} rotation - The rotation direction
 * @returns {Object} The new direction
 */
export function rotateDirection({ dx, dy }, rotation) {
    return rotation === "CCW" ? { dx : dy + 0, dy : -dx + 0 } : { dx : -dy + 0, dy : dx };
}

export function move(map, { x, y, dx, dy }) {
    const newPosition = { x : x + dx, y : y + dy };

    // if (!inBounds(map, newPosition)) {
    //     return true;
    // }

    if (charAt(map, newPosition) === "#") {
        const newDelta = rotateDirection({ dx, dy }, "CW");

        return move(map, { x, y, ...newDelta });
    }

    return { ...newPosition, dx, dy };
}

export function getStartPosition(map, startChar) {
    const { rows, cols } = getDim(map);

    const idx = map.replaceAll(EOL, "").indexOf(startChar);

    return { x : idx % cols, y : Math.floor(idx / rows) };
}

export function walkMap(map, { startChar = "^", marker = "X", dx = 0, dy = -1 } = {}) {
    let currPosition = { ...getStartPosition(map, startChar), dx, dy };
    let moves        = 0;
    let newMap       = map.slice(0);

    // const maps = [ newMap ];

    while (inBounds(map, currPosition)) {
        if (moves !== 0) {
            // maps.push(setChar(maps.at(-1), currPosition, marker));
            newMap = setChar(newMap, currPosition, marker);

            // writeFileSync("./map.txt", newMap);
        }

        currPosition = move(map, currPosition);

        moves++;
    }

    // console.log(maps, currPosition);
    // newMap = setChar(newMap, currPosition, "+");

    writeFileSync(path.join(__dirname, "./map.txt"), newMap);

    return {
        moves,
        positions : newMap
            .replaceAll(EOL, "")
            .split("")
            .filter((char) => char === marker || char === startChar)
            .length
        };
}

export function countInfections(map, iterations) {
    const { rows, cols } = getDim(map);
    const start          = { x : Math.floor(cols / 2), y : Math.floor(rows / 2) };
    const startDirection = { dx : 0, dy : -1 };
    let position         = start;
    let direction        = startDirection;
    let infections       = 0;

    for (let i = 0; i < iterations; i++) {
        const char = charAt(map, position);

        if (char === "#") {
            direction = rotateDirection(direction, "CW");
            map       = `${map.substring(0, position.y * cols + position.x)}.${map.substring(position.y * cols + position.x + 1)}`;
        } else {
            direction = rotateDirection(direction, "CCW");
            map       = `${map.substring(0, position.y * cols + position.x)}#${map.substring(position.y * cols + position.x + 1)}`;
            infections++;
        }

        const result = move(map, position, direction);

        if (result === true) {
            break;
        }

        position  = result.position;
        direction = result.direction;
    }

    return infections;
}
