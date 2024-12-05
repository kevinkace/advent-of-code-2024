import { describe, expect, test } from "vitest";

import { parse2d } from "../../../utils/data-parsers";

import example1 from "../data/example-1";
import part1 from "../data/02-1";

import { testSafe, testSafeTolerance, validateDiffs, validateDiffsTolerance } from "../02";
import { arrToDiffs } from "../../../utils/lists";

const parsedExample = parse2d(example1);
const parsedData = parse2d(part1);

describe("day 02 - 1", () => {
    test("example", () => {
        expect(parsedExample).toMatchSnapshot();

        expect(testSafe(parsedExample[0])).toBe(true);

        expect(parsedExample.map(testSafe)).toMatchSnapshot();
    });

    test("ad hoc", () => {
        const rows = parse2d("21 20 19 16 15 14 11 9");

        expect(testSafe(rows[0])).toBe(true);
    });

    test("part 1", () => {
        const trueCount = parsedData.map(testSafe).filter(Boolean).length;

        console.log({ trueCount });

        expect(trueCount).toBeGreaterThan(512);
    });
});

describe("day 02 - 2", () => {
    test.skip("example", () => {
        const trueCount = parsedExample.map(row => testSafeTolerance(row)).filter(Boolean).length;

        expect(trueCount).toBe(4);
    });

    test("ad hoc - single row", () => {
        const diffs4 = arrToDiffs(parsedExample[4]);

        expect(diffs4).toMatchSnapshot();
    });

    test.only("ad hoc - pop first", () => {
        const data = parsedData[24];
        const diffs = arrToDiffs(data);

        console.log({ data, diffs });
        const valid = validateDiffsTolerance(diffs);

        console.log({ valid, diffs, data });
    });

    test("ad hoc", () => {


        // expect(validateDiffs(diffs)).toBe(false);

        // const allDiffs = parsedExample.map(row => validateDiffs(arrToDiffs(row)));

        // expect(allDiffs).toMatchSnapshot();


        // expect(validateDiffsTolerance(arrToDiffs(parsedExample[3]))).toBe(true);

        const allValidations = parsedExample.map(row => {
            const diffs = arrToDiffs(row);

            return validateDiffsTolerance(diffs);
        });

        expect(allValidations).toMatchSnapshot();
    });

    test("part 2", () => {
        const allValidations = parsedData.map(row => {
            const diffs = arrToDiffs(row);

            return validateDiffsTolerance(diffs);
        });

        const trueCount = allValidations.filter(Boolean).length;

        console.log({ trueCount });

        console.table(allValidations.map((v, i) => {
            if (!v) {
                return { i, d : parsedData[i].join(","), diffs : arrToDiffs(parsedData[i]).join(",") };
            }
        }).filter(Boolean));

        expect(trueCount).toBeGreaterThan(592);
        expect(trueCount).toBeLessThan(800);

        // expect(allValidations).toEqual();
    });
});
