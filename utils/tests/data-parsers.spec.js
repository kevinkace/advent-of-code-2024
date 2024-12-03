import { expect, test } from "vitest";

import { parse2d, splitToLists } from "../data-parsers";

test("splitToLists", () => {
    const sampleInput = `3   4
4   3
2   5
1   3
3   9
3   3`;

    expect(splitToLists(sampleInput)).toMatchSnapshot();
});

test("parse2d", () => {
    const sampleInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5`;

    expect(parse2d(sampleInput)).toMatchSnapshot();
});
