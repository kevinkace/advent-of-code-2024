import { readFileSync } from "node:fs";
import path             from "node:path";

import { describe, expect, test } from "vitest";

import { binaryCounter, calcFromOps, parseRow, testOpsBin, testOpsTri, walkRows } from "../07";

function getFile(filePath) {
    return readFileSync(path.join(__dirname, filePath), "utf-8");
}

const example1 = getFile("../data/example-1.txt");
const part1    = getFile("../data/input-1.txt");

const answers = {
    example1 : 3749,
    part1    : 975671981569,
    example2 : 11387,
    part2    : 223472064194845
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
        expect(calcFromOps([ 10, 19 ], "1")).toBe(190);
        expect(calcFromOps([ 10, 19 ], "0")).toBe(29);
    });

    test("testOpsBin", () => {
        expect(testOpsBin({ solution : 190, values : [ 10, 19 ] })).toBe(true);
        expect(testOpsBin({ solution : 29, values : [ 10, 19 ] })).toBe(true);
        expect(testOpsBin({ solution : 29, values : [ 10, 18 ] })).toBe(false);
    });

    test("example", () => {
        let sum = 0;

        walkRows(example1, (row) => {
            const { solution, values } = parseRow(row);

            if (testOpsBin({ solution, values })) {
                sum += solution;
            }
        });

        expect(sum).toBe(answers.example1);
    });

    test("part 1", () => {
        let sum = 0;

        walkRows(part1, (row) => {
            const { solution, values } = parseRow(row);

            if (testOpsBin({ solution, values })) {
                sum += solution;
            }
        });

        expect(sum).toBe(answers.part1);
    });
});

describe("day 07 - 2", () => {
    test("testOpsTri", () => {
        expect(testOpsTri({ solution : 190, values : [ 1, 9, 10 ] })).toBe(true);
        expect(testOpsTri({ solution : 156, values : [ 15, 6 ] })).toBe(true);
        expect(testOpsTri({ solution : 7290, values : [ 6, 8, 6, 15 ] })).toBe(true);
    });

    test("example", () => {
        let sum = 0;

        walkRows(example1, (row) => {
            const { solution, values } = parseRow(row);

            if (testOpsBin({ solution, values })) {
                sum += solution;
            } else if (testOpsTri({ solution, values })) {
                sum += solution;
            }
        });

        expect(sum).toBe(answers.example2);
    });

    test("part 2", () => {
        let sum = 0;

        walkRows(part1, (row) => {
            const { solution, values } = parseRow(row);

            if (testOpsBin({ solution, values })) {
                sum += solution;
            } else if (testOpsTri({ solution, values })) {
                sum += solution;
            }
        });

        expect(sum).toBe(answers.part2);
    });
});
