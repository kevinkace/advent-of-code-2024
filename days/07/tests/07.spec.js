import { readFileSync } from "node:fs";
import path             from "node:path";

import { describe, expect, test } from "vitest";

import { binaryCounter, calcFromBin, parseRow, testOps, walkRows } from "../07";

function getFile(filePath) {
    return readFileSync(path.join(__dirname, filePath), "utf-8");
}

const example1 = getFile("../data/example-1.txt");
const part1    = getFile("../data/input-1.txt");

const answers = {
    example1 : 3749,
    part1    : 975671981569,
    // part2:,
    // example2
};


describe("day 07 - 1", () => {
    test("parse and walk row", () => {
        walkRows(example1, (row) => {
            const { solution, values } = parseRow(row);

            expect(typeof solution).toBe("number");
            expect(Array.isArray(values)).toBe(true);
        });
    });

    test("getOps", () => {
        expect(binaryCounter("0000")).toBe("0001");
        expect(binaryCounter("0101")).toBe("0110");
    });

    test("calcFromBin", () => {
        expect(calcFromBin([ 10, 19 ], "1")).toBe(190);
        expect(calcFromBin([ 10, 19 ], "0")).toBe(29);
    });

    test("testOps", () => {
        expect(testOps({ solution : 190, values : [ 10, 19 ] })).toBe(true);
        expect(testOps({ solution : 29, values : [ 10, 19 ] })).toBe(true);
        expect(testOps({ solution : 29, values : [ 10, 18 ] })).toBe(false);
    });

    test("example", () => {
        let sum = 0;

        walkRows(example1, (row) => {
            const { solution, values } = parseRow(row);

            if (testOps({ solution, values })) {
                sum += solution;
            }
        });

        expect(sum).toBe(answers.example1);
    });

    test("part 1", () => {
        let sum = 0;

        walkRows(part1, (row) => {
            const { solution, values } = parseRow(row);

            if (testOps({ solution, values })) {
                sum += solution;
            }
        });

        expect(sum).toBe(answers.part1);
    });
});

// describe("day 07 - 2", () => {
//     test("example", () => {
//     });

//     test("part 2", () => {
//     });
// });
