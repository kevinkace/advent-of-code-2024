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

export function tally(list) {
    return list.reduce((acc, cur) => {
        const newVal = (acc.get(cur) || 0) + 1;

        acc.set(cur, newVal);

        return acc;
    }, new Map());
}

export function tallyProduct(tallyA, tallyB) {
    const products = [];

    tallyA.forEach((tallyAOccurrence, number) => {
        const tallyBOccurrence = tallyB.get(number) || 0;

        products.push(tallyAOccurrence * tallyBOccurrence * number);
    });

    return sumList(products);
}