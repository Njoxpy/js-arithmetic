// import necessary modules
import { describe, it, expect } from "vitest";

// import addition module
import { addition } from "../src/addition";


describe("addition", () => {
    // test 1 for positive number.
    it("should return 3 when 2 is added to 1.", () => {
        expect(addition(1, 2)).toBe(3)
    })

    // test 2: negative numbers.
    it("should return -7 when 1 is subtracted to -8.", () => {
        expect(addition(1, -8)).toBe(-7)
    })

    // test 2: for decimal numbers.
    it("should return 4.6 when 3.5 is added to 1.1.", () => {
        expect(addition(3.5, 1.1)).toBe(4.6)
    })

    // test 3: adding with zero
    it("should return 3.5 when 0 is added to 3.5.", () => {
        expect(addition(3.5555, 0)).toBeCloseTo(3.5555)
    })


    // handling large numbers.
    it("should return ", () => {
        expect(addition(1000000, 5000000)).toBe(6000000)
    })

    // test 4: when a number is a string instead of a number
    /*
        it("should return warning a when a type is string", () => {
            expect("a", "b").toBe("string cannot be a number.")
        })
    */

})

/*
Install
- vitest snippest, react libraray snippets*

- How to deal with addtion of decimal numbers when working with test but you have not configured that you want to accept only integer numbe type 


- Here are the list of test cases which are important in testing
    - Handling postive numbers.
    - handling negative numbers.
    - handling large numbers.
    - handling large numbers with decimal.
    - handling wrong input instead of a number a user enters a string.
*/