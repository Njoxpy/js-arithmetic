export function addition(a, b) {

    // check to see if the type of a or b is string then warn a user that cannot be done
    if (typeof (a) === "string" || typeof (b) === "string") {
        return "string cannot be a number."
    }
    return a + b;
}