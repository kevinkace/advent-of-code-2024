import { expect, test } from "vitest";

import { getListDiffs, sumList } from "../lists";

test("getListSums", () => {
    expect(getListDiffs([[2, 3, 4], [4, 1, 4]])).toMatchSnapshot();
});

test("sumList", () => {
    expect(sumList([3, 56, 2])).toMatchSnapshot();
});
