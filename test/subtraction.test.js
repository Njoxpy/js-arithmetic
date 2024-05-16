// import necessary modules
import { describe, it, expect } from "vitest";

// import subtract module
import { subtraction } from "../src/subTraction";

describe("subtraction.", () => {

    // test case 1: positive numbers
    it("should return 4 after 5 is subrcated to 1.", () => {
        expect(subtraction(5, 1)).toBe(4);
    })

    // test case 2: negative number.
    it("should return -4 after 1 is subrcated to 5.", () => {
        expect(subtraction(1, 5)).toBe(-4);
    })

    // test case 2: decimal numbers.
    it("should return  -3.98 when 1.02 is subtracted to 5.", () => {
        expect(subtraction(1.02, 5)).toBeCloseTo(-3.98);
    })

    // test case 3: handling large numbers.
    it("should return  -3.98 when 1.02 is subtracted to 5.", () => {
        expect(subtraction(100034, 20000)).toBe(80034);
    })

    // test case 3: handling large numbers with decimal.
    it("should return  number approximately to 100028.033.", () => {
        expect(subtraction(100034, 5.967)).toBeCloseTo(100028.033);
    })

})