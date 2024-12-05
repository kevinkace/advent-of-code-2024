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

    const [shorterTally, longerTally] = [tallyA, tallyB].sort((tA, tB) => tA.length < tB.length ? 1 : -1);

    shorterTally.forEach((sTallyOccurrence, number) => {
        const lTallyOccurrence = longerTally.get(number) || 0;

        products.push(sTallyOccurrence * lTallyOccurrence * number);
    });

    return sumList(products);
}

export function arrToDiffs(arr) {
    return arr.reduce((acc, curr, index) => {
        const next = arr[index + 1];

        if (next === undefined) {
            return acc;
        }

        acc.push(next - curr);

        return acc;
    }, []);
}
