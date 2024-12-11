import { readFileSync } from "node:fs";
import path             from "node:path";

import { describe, expect, test }                     from "vitest";
import { getDim, inBounds, rotateDirection, walkMap } from "../06";

function getFile(filePath) {
    return readFileSync(path.join(__dirname, filePath), "utf-8");
}

const example1 = getFile("../data/example-1.txt");
const part1    = getFile("../data/input-1.txt");

const answers = {
    example1 : 41,
    part1    : 5212,
    // part2:,
    // example2
};


describe("day 06 - 1", () => {
    test("getDim", () => {
        expect(getDim(example1)).toEqual({ rows : 10, cols : 10 });
    });

    test("inBounds", () => {
        expect(inBounds(example1, { x : 0, y : 0 })).toBe(true);
        expect(inBounds(example1, { x : 9, y : 9 })).toBe(true);
        expect(inBounds(example1, { x : 10, y : 10 })).toBe(false);
        expect(inBounds(example1, { x : -1, y : 9 })).toBe(false);
    });

    test("rotateDirection", () => {
        expect(rotateDirection({ dx : 0, dy : -1 }, "CW")).toEqual({ dx : 1, dy : 0 });
        expect(rotateDirection({ dx : 0, dy : -1 }, "CCW")).toEqual({ dx : -1, dy : 0 });
        expect(rotateDirection({ dx : 1, dy : 0 }, "CW")).toEqual({ dx : 0, dy : 1 });
        expect(rotateDirection({ dx : 1, dy : 0 }, "CCW")).toEqual({ dx : 0, dy : -1 });
    });

    test("example", () => {
        const { positions } = walkMap(example1);

        expect(positions).toBe(answers.example1);
    });

    test("part 1", () => {
        const { positions } = walkMap(part1);

        expect(positions).toBe(answers.part1);
    });
});

// describe("day 06 - 2", () => {
//     test("example", () => {
//     });

//     test("part 2", () => {
//     });
// });
