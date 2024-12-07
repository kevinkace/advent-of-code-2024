import { expect, test } from "vitest";

import { arrToDiffs, getListDiffs, sumList, tally, tallyProduct } from "../lists";

test("getListSums", () => {
    expect(getListDiffs([[2, 3, 4], [4, 1, 4]])).toMatchSnapshot();
});

test("sumList", () => {
    expect(sumList([3, 56, 2])).toMatchSnapshot();
});

test("tally", () => {
    expect(tally([2, 2, 3, 3, 4, 6, 6, 8 ])).toMatchSnapshot();
});

test("tallyProduct", () => {
    const t1 = tally([2, 2, 3, 3, 4, 6, 6, 8 ]);
    const t2 = tally([2, 3, 3, 4, 5, 6, 6, 6, 6, 8 ]);
    expect(tallyProduct(t1, t2)).toMatchSnapshot();
});

test("arrToDiffs", () => {
    expect(arrToDiffs([2, 3, 4, 5, 6])).toEqual([1, 1, 1, 1]);
    expect(arrToDiffs([2, 3, 4, 5, 6, 8])).toEqual([1, 1, 1, 1, 2]);
    expect(arrToDiffs([5, 3, 0, 0, 6, 8, 9])).toEqual([-2, -3, 0, 6, 2, 1]);
});