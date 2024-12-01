import { expect, test } from "vitest";

import { splitToLists } from "../data-parsers";

const sampleInput = `3   4
4   3
2   5
1   3
3   9
3   3`;

test("splitToLists", () => {
    expect(splitToLists(sampleInput)).toMatchSnapshot();
})