import example1 from "./data/example-1.js";

import { splitToLists } from "../utils/data-parsers.js";
import { getListDiffs, sumList } from "../utils/lists.js";

const [listA, listB ] = splitToLists(example1).map(list => list.sort((a, b) => a > b ? 1 : 0));

const diffs = getListDiffs([listA, ListB]);

console.log(sumList(diffs));
