import { readFileSync } from "node:fs";
import path from "node:path";

import { describe, expect, test } from "vitest";

import { getDoIndexes, getDontIndexes, getMuls, sumMuls } from "../03";

function getFile(filePath) {
    return  readFileSync(path.join(__dirname, filePath), "utf-8");
}

const example1 = getFile("../data/example-1.log");
const example2 = getFile("../data/example-2.log");
const part1 = getFile("../data/03-1.log");

const answers = {
    part1: 188741603,
    part2: 67269798
};


describe("day 03 - 1", () => {
    test("example", () => {
        const muls = getMuls(example1);

        const sum = muls
            .map(m => Number(m[1]) * Number(m[2]))
            .reduce((a, b) => a + b, 0);

        expect(sum).toEqual(161);
    });

    test("part 1", () => {
        const muls = getMuls(part1);

        const sum = muls
            .map(m => Number(m[1]) * Number(m[2]))
            .reduce((a, b) => a + b, 0);

        expect(sum).toEqual(answers.part1);
    });
});

describe("day 03 - 2", () => {
    test("example", () => {
        const sum = sumMuls(example2);

        expect(sum).toEqual(48);
    });

    test("part 2", () => {
        const sum = sumMuls(part1)

        expect(sum).toEqual(answers.part2);
    });
});
