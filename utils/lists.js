export function getListDiffs([listA, listB]) {
    const diffs = [];

    for (let index = 0; index < listA.length; index++) {
        diffs.push(Math.abs(listA[index] - listB[index]));
    }

    return diffs;
}

export function sortLists(lists) {
    return lists.map(list => list.sort((a, b) => a > b ? 1 : -1));
}

export function sumList(list) {
    return list.reduce((acc, cur) => acc + cur, 0);
}