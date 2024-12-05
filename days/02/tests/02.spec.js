import { describe, expect, test } from "vitest";

import { parse2d } from "../../../utils/data-parsers";

import example1 from "../data/example-1";
import part1 from "../data/02-1";

import { checkDirections, checkDistances, testSafe, valDiffs, valDiffs2099, validateRows, validRowCount } from "../02";
import { arrToDiffs } from "../../../utils/lists";

const parsedExample = parse2d(example1);
const parsedData = parse2d(part1);

const answers = {
    part1 : 572
};

describe("day 02 - 1", () => {
    test.skip("ad hoc", () => {
        const rows = parse2d("21 20 19 16 15 14 11 9");

        expect(testSafe(rows[0])).toBe(true);
    });

    test("example", () => {
        expect(parsedExample).toMatchSnapshot();
        expect(validateRows(parsedExample)).toMatchSnapshot();
        expect(validRowCount(parsedExample)).toBe(2);
    });

    test("part 1 - new style", () => {
        const trueCount = validRowCount(parsedData);

        expect(trueCount).toEqual(answers.part1);
    });
});

describe.skip("isolated", () => {
    test("new style", () => {
        const rowIndex = 24;

        const diffs = arrToDiffs(parsedData[rowIndex]);

        const v1 = valDiffs2099(diffs);

        expect(v1).toBe(false);
    });
});

describe("day 02 - new style", () => {
    const diffs = [
        [1, 1, 2, 3, 1],
        [1, 1, 2, 3, 4],
        [1, 1, 2, 3, 0],
        [0, 1, 2, 3, 1],
        [1, -1, 2, 3, 1],
        [-1, -1, -2, -3]
    ];

    test("checkDirection", () => {
        expect(diffs.map(diff => checkDirections(diff))).toMatchSnapshot();
    });

    test("checkDistances", () => {
        expect(diffs.map(diff => checkDistances(diff))).toMatchSnapshot();
    });

    test("validateDiffs", () => {
        expect(diffs.map(diff => valDiffs(diff))).toMatchSnapshot();
    });
});

describe.skip("day 02 - 2", () => {
    test.skip("example", () => {
    });

    // test("ad hoc - single row", () => {
    //     const diffs4 = arrToDiffs(parsedExample[4]);

    //     expect(diffs4).toMatchSnapshot();
    // });

    test("ad hoc", () => {
    });

    test("part 2", () => {
    //     const allValidations = parsedData.map(row => {
    //         const diffs = arrToDiffs(row);

    //         return validateDiffsTolerance(diffs);
    //     });

    //     const trueCount = allValidations.filter(Boolean).length;

    //     console.log({ trueCount });

    //     console.table(allValidations.map((v, i) => {
    //         if (!v) {
    //             return { i, d : parsedData[i].join(","), diffs : arrToDiffs(parsedData[i]).join(",") };
    //         }
    //     }).filter(Boolean));

    //     expect(trueCount).toBeGreaterThan(592);
    //     expect(trueCount).toBeLessThan(800);

        // expect(allValidations).toEqual();
    });
});
