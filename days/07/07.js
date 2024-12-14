const eol = require("os").EOL;

export function parseRow(row) {
    const [ solution, ...values ] = row.split(/\:? /).map(Number);

    return { solution, values };
}

export function walkRows(data, cb) {
    data.split(eol).forEach(cb);
}

export function binaryCounter(bin) {
    const binary = parseInt(bin, 2) + 1;

    return binary.toString(2).padStart(bin.length, "0");
}

export function trinaryCounter(tri) {
    const trinary = parseInt(tri, 3) + 1;

    return trinary.toString(3).padStart(tri.length, "0");
}

export function opsFromAry(ary, [ n0, n1 ]) {
    switch (ary) { // eslint-disable-line default-case
        case "0":
            return n0 + n1;
        case "1":
            return n0 * n1;
        case "2":
            return Number([ n0, n1 ].join(""));
    }
}


export function calcFromOps(values, bin) {
    return values.reduce((acc, number, i) => {
        if (!i) {
            return number;
        }

        return opsFromAry(bin[i - 1], [ acc, number ]);
    }, 0);
}

export function testOpsBin({ solution, values }) {
    const iterations = Math.pow(2, values.length);

    let binary = "0".repeat(values.length - 1);

    for (let i = 0; i < iterations; i++) {
        if (calcFromOps(values, binary) === solution) {
            return true;
        }

        binary = binaryCounter(binary);
    }

    return false;
}

export function testOpsTri({ solution, values }) {
    const iterations = Math.pow(3, values.length);

    let trinary = "0".repeat(values.length - 1);

    for (let i = 0; i < iterations; i++) {
        if (calcFromOps(values, trinary) === solution) {
            return true;
        }

        trinary = trinaryCounter(trinary);
    }

    return false;
}
