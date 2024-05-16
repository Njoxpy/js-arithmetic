# Getting Started

## What Is Unit Testing

- A form of automated testing where we write code to test our code.Use real examples

```js title="unit.js"
function add() {
  return num1 + num2;
}
```

- Automated testing is way faster than manual testing.Codebase contain the `production code` and `test code`, benefits of unit testing:

  1: Detects bugs early

  2: Facilitates refactoring.

  3: Improves Code Quality:

  4: Documentation:

> Write tests that are maintaibale, robust and trustworthy. By Njox.

## Types of Tests

- In automated testing we have three types of testing which are `unit testing`, `integration testing` and `end to end` testing.Unit testing verifies the correctness of the individual units in isolation,unites can be function classes or small modules and unit testing are important when catching bugs into the early part of the development process.

- Integration testing:Is important in verfying how different units of the components works together.

- End to end helps in testing the entire application as whole.Which type of test to have, you should write more unit testing compared to integration testing and end to end testing.Which is know as <span style="color:orange">testing pyramid</span>

```txt
unit > integration > E2E
```

## Testing Frameworks

- testing frameworks are set of tools for writting and running tests. Example of testing frameworks jest, Mocha, Jasmine, Vitest, Cypress and Playwright.

## Setting up Vitest

```bash
npm i -D vitest
```

- Add test script into the `package.json`.

```json title="package.json"

  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest"
  }
```

## Your First Tests

- So inorder rto test ypour code into the project what is important or what is required into the project we have to create a folder into the root of the project folder should be called `test` and inside the fol;der you should create a file into which vitest will; look into it to test your code.

```sh title="test.sh"
# create test folder
mkdir test

# navigate into test folder
cd test

# create a test file for testiong your code
touch intro.test.js
```

- Make sure your test file has a pattern of `test.js`, this is i,portant because it will help vitetst to figure out which test to test any that time into the project.

## Test Driven Development(TDD)

- Kuna aina mbili za kuandika test katika programming, ya kwanza ni kuandika code kwanza kisha test baadaye na kuna ya kuandika test kwanza kisha code baadaye.Hivyo test driven development ni ile namna mabayo unaandika test ya projaect zako au ya code kisha ndio unafuatata na production code, ni muhimu kujua kwa sio lazima kuanza na hiyo ila jinsi muda unavyoenda na jinsi unavyokuwa na uzoefu mbambali ndio utaweza kuchagua kwamba ipi ni nzuri na ip[i inafanya kazi vizuri kwenye project zako.Tewst driven developement inakifupisho ambacho ni TDD.

- Je test drive development inafanyika vipi katika softwar edevelopement

## Running Test Efficiently

## Code Coverage

## Outro
