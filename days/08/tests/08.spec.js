import { readFileSync } from "node:fs";
import path             from "node:path";

import { describe, expect, test } from "vitest";

function getFile(filePath) {
    return readFileSync(path.join(__dirname, filePath), "utf-8");
}

const example1 = getFile("../data/example-1.txt");
const part1    = getFile("../data/input-1.txt");

const answers = {
    // example1:
    // part1: ,
    // part2:,
    // example2
};


describe("day 08 - 1", () => {
    test("example", () => {

    });

    // test("part 1", () => {
    // });
});

// describe("day 08 - 2", () => {
//     test("example", () => {
//     });

//     test("part 2", () => {
//     });
// });
