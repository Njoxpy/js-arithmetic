// import functions
import { describe, it, test, expect } from "vitest";

// import division function
import { division } from "../src/division";

describe("division", () => {

    // test case 1: positive numbers.
    it("it should return 10 after dividing 20 to 2", () => {
        expect(division(20, 2)).toBe(10);
    })

    // test case 2: negative numbers.
    it("it should return -10 after dividing 20 to -2", () => {
        expect(division(20, -2)).toBe(-10);
    })

    // test case 3: handle decimal numbers.
    it("should return number approximately to 3.33333", () => {
        expect(division(10, 3)).toBeCloseTo(3.33);
    })

    // test case 5: handle division error
    it("it should return 10 after dividing 20 to 2", () => {
        expect(division(20, 0)).toBe("cannot divide by zero.");
    })

    // test case 3: handle large numbers.
    it("should return 3333333 when 9999999 is divided with 3", () => {
        expect(division(9999999, 3)).toBe(3333333);
    })

    // test case 3: handle large numbers with decimal.
    it("should return number approximately to 3.33333", () => {
        expect(division(9999999, 5.555)).toBeCloseTo(1800179.837983798);
    })
})
