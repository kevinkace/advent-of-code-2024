import { describe, expect, test } from "vitest";

import { letterAt, numberRows } from "../unparsed";

describe("unparsed", () => {
    test("letterAt", () => {
        const string = "ABC\r\nDEF\r\nGHI";

        expect(letterAt(string, { row : 0, col : 0 })).toBe("A");
        expect(letterAt(string, { row : 1, col : 1 })).toBe("E");
        expect(letterAt(string, { row : 2, col : 2 })).toBe("I");
    });

    test("numberRows", () => {
        const string = "ABC\r\nDEF\r\nGHI";

        expect(numberRows(string)).toBe(3);
    });
});
