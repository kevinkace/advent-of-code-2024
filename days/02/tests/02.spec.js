import { describe, expect, test } from "vitest";

import example1 from "../data/example-1";
import part1 from "../data/02-1";
import { parse2d } from "../../../utils/data-parsers";
import { testSafe } from "../02";


describe("day 02 - 1", () => {
    test("example", () => {
        const data = parse2d(example1);
        expect(data).toMatchSnapshot();

        expect(testSafe(data[0])).toBe(true);

        expect(data.map(testSafe)).toMatchSnapshot();
    });

    test("ad hoc", () => {
        const rows = parse2d("21 20 19 16 15 14 11 9");

        expect(testSafe(rows[0])).toBe(true);
    });

    test("part 1", () => {
        const data = parse2d(part1);

        // data.forEach(r => {
        //     console.log(r.join(" "), testSafe(r));
        // });

        const trueCount = data.map(testSafe).filter(Boolean).length;

        console.log("trueCount", trueCount);

        expect(trueCount).toBeGreaterThan(512);
    });
});

describe("day 02 - 2", () => {
    test("example", () => {
    });

    test("part 2", () => {
    });
});
