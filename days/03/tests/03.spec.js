import { readFileSync } from "node:fs";
import path from "node:path";

import { describe, expect, test } from "vitest";

import { getMuls } from "../03";

const example1 = readFileSync(path.join(__dirname, "../data/example-1.log"), "utf-8");
const part1 = readFileSync(path.join(__dirname, "../data/03-1.log"), "utf-8");

const answers = {
    part1: 188741603,
    // part2:
};


describe("day 03 - 1", () => {
    test("example", () => {
        const muls = [...getMuls(example1)];

        const sum = muls
            .map(m => Number(m[1]) * Number(m[2]))
            .reduce((a, b) => a + b, 0);

        expect(sum).toEqual(161);
    });

    test("part 1", () => {
        const muls = [...getMuls(part1)];

        const sum = muls
            .map(m => Number(m[1]) * Number(m[2]))
            .reduce((a, b) => a + b, 0);

        expect(sum).toEqual(answers.part1);
    });
});

// describe("day 03 - 2", () => {
//     test("example", () => {
//     });

//     test("part 2", () => {
//     });
// });
