import { readFileSync } from "node:fs";
import path             from "node:path";

import { describe, expect, test } from "vitest";

import { checkDir, checkWord, checkXword } from "../04";

function getFile(filePath) {
    return readFileSync(path.join(__dirname, filePath), "utf-8");
}

const example1 = getFile("../data/example-1.log");
const example2 = getFile("../data/example-2.log");
const example3 = getFile("../data/example-3.log");

const part1 = getFile("../data/04-1.log");

const word  = "XMAS";
const xword = "MAS";

const answers = {
    example1      : 4,
    example2      : 18,
    part1         : 2642,
    part2example3 : 9,
    part2         : 1974
};


describe("day 04 - 1", () => {
    test("checkDir", () => {
        expect(checkDir(example1, word, "N", { row : 1, col : 1 })).toBe(false);
        expect(checkDir(example1, word, "N", { row : 4, col : 1 })).toBe(true);
        expect(checkDir(example1, word, "N", { row : 4, col : 1 })).toBe(true);
        expect(checkDir(example1, word, "SE", { row : 0, col : 2 })).toBe(true);
        expect(checkDir(example1, word, "S", { row : 0, col : 2 })).toBe(false);
    });

    test("checkWord", () => {
        const result = checkWord(example1, word);

        expect(result).toBe(answers.example1);
    });

    test("example 2", () => {
        const result = checkWord(example2, word);

        expect(result).toBe(answers.example2);
    });

    test("part 1", () => {
        const result = checkWord(part1, word);

        expect(result).toBe(answers.part1);
    });
});

describe("day 04 - 2", () => {
    test("example", () => {
        const result = checkXword(example3, xword);

        expect(result).toBe(answers.part2example3);
    });

    test("part 2", () => {
        const result = checkXword(part1, xword);

        expect(result).toBe(answers.part2);
    });
});
