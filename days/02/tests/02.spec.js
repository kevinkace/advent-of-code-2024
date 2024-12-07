import { describe, expect, test } from "vitest";

import { parse2d } from "../../../utils/data-parsers";
import { trueCount } from "../../../utils/lists";

import example1 from "../data/example-1";
import part1 from "../data/02-1";

import { testSafe, valArrTolerance, validateRows, validRowCount, valRowsTolerance } from "../02";

const parsedExample = parse2d(example1);
const parsedData = parse2d(part1);

const answers = {
    part1 : 572,
    part2 : 612
};

describe.skip("day 02 - 1", () => {
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

describe("day 02 - 2", () => {
    test("example", () => {
        const data = valRowsTolerance(parsedExample);
        const count = trueCount(data);

        expect(count).toBe(4);
    });

    test("ad hoc - single row", () => {
        const a1 = [2, 5, 6, 8, 6 ];

        const data = valRowsTolerance([a1]);
        const count = trueCount(data);

        expect(count).toBe(1);
    });

    test("part 2", () => {
        const data = valRowsTolerance(parsedData);
        const count = trueCount(data);

        expect(count).toEqual(answers.part2);
    });
});
