import { readFileSync } from "node:fs";
import path             from "node:path";

import { describe, expect, test } from "vitest";
import { getLetterIndices }       from "../day";

function getFile(filePath) {
    return readFileSync(path.join(__dirname, filePath), "utf-8");
}

const example1 = getFile("../data/example-1.log");
const part1    = getFile("../data/04-1.log");

const answers = {
    // example1:
    // part1: ,
    // part2:,
    // example2
};


describe("day 04 - 1", () => {
    test("example", () => {
        const data = getLetterIndices(example1, [ "S", "X" ]);

        console.log(data);
    });

    test("part 1", () => {
    });
});

describe("day 04 - 2", () => {
    test("example", () => {
    });

    test("part 2", () => {
    });
});
