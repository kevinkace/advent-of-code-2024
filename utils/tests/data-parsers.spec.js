import { expect, test } from "vitest";

import { splitToLists } from "../data-parsers";

import example1 from "../../01/data/example-1";

test("splitToLists", () => {
    expect(splitToLists(example1)).toMatchSnapshot();
})