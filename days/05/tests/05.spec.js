import { readFileSync } from "node:fs";
import path             from "node:path";

import { describe, expect, test } from "vitest";

import { buildRules, getCorrectPageOrder, getMiddlePage, getMiddlePageSum, getPagesList, getRulesPairs, sortPageList, validatePage } from "../05";

function getFile(filePath) {
    return readFileSync(path.join(__dirname, filePath), "utf-8");
}

const example1 = getFile("../data/example-1.txt");
const part1    = getFile("../data/05-1.log");

const answers = {
    example1      : 143,
    part1         : 5275,
    part2Example1 : 123,
    part2         : 6191
};


describe("day 05 - 1", () => {
    test("build rules", () => {
        const rules = buildRules(example1);

        // console.log(rules);
    });

    test("getPages", () => {
        const pagesList = getPagesList(example1);

        // console.log(pagesList);
    });

    test("validate example", () => {
        const rules     = buildRules(example1);
        const pagesList = getPagesList(example1);

        let middlePageSum = 0;

        pagesList.forEach(pageList => {
            const valid = validatePage(rules, pageList);

            if (valid) {
                const middlePage = getMiddlePage(pageList);

                middlePageSum += parseInt(middlePage, 10);
            }
        });

        expect(middlePageSum).toBe(answers.example1);
    });

    test("part 1", () => {
        console.time("part1");
        const rules     = buildRules(part1);
        const pagesList = getPagesList(part1);

        const middlePageSum = getMiddlePageSum(rules, pagesList);

        expect(middlePageSum).toBe(answers.part1);
        console.timeEnd("part1");
    });
});

describe("day 05 - 2", () => {
    test("example 2", () => {
        const rules     = buildRules(example1);
        const rulePairs = getRulesPairs(example1);
        const pagesList = getPagesList(example1);

        let sum = 0;

        pagesList.forEach(pageList => {
            const valid = validatePage(rules, pageList);

            if (valid) {
                return;
            }

            const validOrder = sortPageList(rulePairs, pageList);
            const middlePage = getMiddlePage(validOrder);

            sum += parseInt(middlePage, 10);
        });

        expect(sum).toBe(answers.part2Example1);
    });

    test("part 2", () => {
        console.time("part 2");
        const rules     = buildRules(part1);
        const rulePairs = getRulesPairs(part1);
        const pagesList = getPagesList(part1);

        let sum = 0;

        pagesList.forEach(pageList => {
            const valid = validatePage(rules, pageList);

            if (valid) {
                return;
            }

            const validOrder = sortPageList(rulePairs, pageList);
            const middlePage = getMiddlePage(validOrder);

            sum += parseInt(middlePage, 10);
        });

        expect(sum).toBe(answers.part2);

        console.timeEnd("part 2");
    });
});
