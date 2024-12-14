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

export function calcFromBin(values, bin) {
    return values.reduce((acc, number, i) => {
        if (!i) {
            return number;
        }

        return bin[i - 1] === "0" ? acc + number : acc * number;
    }, 0);
}

export function testOps({ solution, values }) {
    const iterations = Math.pow(2, values.length);

    let binary = "0".repeat(values.length - 1);


    for (let i = 0; i < iterations; i++) {
        if (calcFromBin(values, binary) === solution) {
            return true;
        }

        binary = binaryCounter(binary);
    }

    return false;
}
