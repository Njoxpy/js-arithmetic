// import functionality from vitest
import { describe, it, expect, test } from "vitest";

// import multiplication function
import { multiplication } from "../src/multiplication";

describe("multiplication", () => {

    // test case 1 positive numbers normal.
    it("should return 10 after 5 has been multiplied to 2.", () => {
        expect(multiplication(5, 2)).toBe(10);
    })

    // test case 2 negative numbers.
    it("should return 10 after 5 has been multiplied to 2.", () => {
        expect(multiplication(5, -2)).toBe(-10);
    })

    // test case 3: handling decimal numbers.
    it("should return 0 after 5 has been multiplied to 0.", () => {
        expect(multiplication(10, 4.553)).toBe(45.53);
    })

    // test case 4: handling large numbers.
    it("should return 45530000 after 10000000 is multiplied to 4.553.", () => {
        expect(multiplication(10000000, 4.553)).toBe(45530000);
    })

    // test case 5: handling large decimal numbers.
    it("should return a decimal number approximately to 46592.925168.", () => {
        expect(multiplication(10233.456, 4.553)).toBeCloseTo(46592.925168);
    })

    // test case 6: handling zero number.
    it("should return 0 after 5 has been multiplied to 0.", () => {
        expect(multiplication(5, 0)).toBe(0);
    })
})