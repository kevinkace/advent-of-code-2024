const mulRegex = /mul\(([0-9]*),([0-9]*)\)/g;


export function getMuls(input) {
    return input.matchAll(mulRegex);
}
