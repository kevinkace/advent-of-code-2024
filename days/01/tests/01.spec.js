import { describe, expect, test } from "vitest";

import { splitToLists }                                          from "../../../utils/data-parsers";
import { getListDiffs, sortLists, sumList, tally, tallyProduct } from "../../../utils/lists";

import example1 from "../data/example-1";
import part1    from "../data/01-1";


describe("day 01-1", () => {
    test("example", () => {
        let [ listA, listB ] = splitToLists(example1);

        expect(listA).toEqual([ 3, 4, 2, 1, 3, 3 ]);

        [ listA, listB ] = sortLists([ listA, listB ]);


        expect(listA).toEqual([ 1, 2, 3, 3, 3, 4 ]);

        const diffs = getListDiffs([ listA, listB ]);

        expect(diffs).toEqual([ 2, 1, 0, 1, 2, 5 ]);

        expect(sumList(diffs)).toEqual(11);
    });

    test("part 1", () => {
        const lists = sortLists(splitToLists(part1));
        const diffs = getListDiffs(lists);
        const sum   = sumList(diffs);

        expect(sum).toEqual(2086478);
    });
});

describe("day 01-2", () => {
    test("tally", () => {
        const list       = [ 2, 4, 5, 3, 2, 3, 4, 4, 2 ];
        const [ sorted ] = sortLists([ list ]);

        expect(sorted).toMatchSnapshot();
        expect(tally(sorted)).toMatchSnapshot();
    });

    test("part 2 example", () => {
        const [ listA, listB ] = sortLists(splitToLists(example1));

        const tallyA = tally(listA);
        const tallyB = tally(listB);

        expect(tallyA).toMatchSnapshot();
        expect(tallyB).toMatchSnapshot();

        expect(tallyProduct(tallyA, tallyB)).toEqual(31);
    });

    test("part 2", () => {
        const [ tallyA, tallyB ] = sortLists(splitToLists(part1)).map(tally);

        expect(tallyProduct(tallyA, tallyB)).toEqual(24941624);
    });
});
