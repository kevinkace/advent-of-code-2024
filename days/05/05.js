const eol = require("os").EOL;

export function buildRules(string) {
    const rules = new Map();

    // eslint-disable-next-line arenanet/must-assign-out-of-place-array-method
    string.split(eol).every(line => {
        if (!line) {
            return false;
        }

        const [ x, y ] = line.split("|");

        if (!rules.has(x)) {
            rules.set(x, new Map());
        }

        rules.get(x).set(y, true);

        return true;
    });

    return rules;
}

export function getRulesPairs(string) {
    return string.split(eol + eol)[0].split(eol);
}

export function getPagesList(string) {
    const [ _, pages ] = string.split(eol + eol);

    return pages.split(eol);
}


export function validatePage(rules, pageList) {
    const pages = pageList.split(",");

    for (let outerIndex = 0; outerIndex < pages.length; outerIndex++) {
        const page1 = pages[outerIndex];

        for (let innerIndex = outerIndex + 1; innerIndex < pages.length; innerIndex++) {
            const page2 = pages[innerIndex];

            if (rules.has(page2) && rules.get(page2).has(page1)) {
                return false;
            }
        }
    }

    return true;
}

export function getMiddlePage(pageList) {
    const pages = pageList.split(",");

    return pages[Math.floor(pages.length / 2)];
}

export function getMiddlePageSum(rules, pagesList) {
    let middlePageSum = 0;

    pagesList.forEach(pageList => {
        const valid = validatePage(rules, pageList);

        if (valid) {
            const middlePage = getMiddlePage(pageList);

            middlePageSum += parseInt(middlePage, 10);
        }
    });

    return middlePageSum;
}

export function sortPageList(rulesPairs, pageList) {
    const pages = pageList.split(",");

    return pages.sort((a, b) => {
        if (rulesPairs.includes(`${a}|${b}`)) {
            return -1;
        }

        if (rulesPairs.includes(`${b}|${a}`)) {
            return 1;
        }

        return 0;
    }).join(",");
}
