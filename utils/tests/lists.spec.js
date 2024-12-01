import { expect, test } from "vitest";

import { getListDiffs, sumList, tally, tallyProduct } from "../lists";

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
})
