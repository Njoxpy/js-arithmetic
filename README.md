# Arithmetic Operations Library

- A simple JavaScript library for basic arithmetic operations with tests written using Vitest.

- This repository was created as part of my journey to learn and practice using Vitest for testing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [Tests](#tests)
- [Contributing](#contributing)

## Installation

To use this library in your project, you can clone the repository and install the necessary dependencies.

```bash
git clone https://github.com/Njoxpy/js-arithmetic
```

```sh
cd src
```

```sh
# install dependency
npm install
```

## Usage

- You can use the functions by importing them into your JavaScript file.

```js
const { add, subtract, multiply, divide } = require();

// Example usage
console.log(addition(2, 3)); // 5
console.log(subtraction(5, 2)); // 3
console.log(multiplication(4, 3)); // 12
console.log(division(10, 2)); // 5
```

## Functions

- `addition(a, b)`
  Returns the sum of a and b.

- `subtraction(a, b)`
  Returns the difference of a and b.

- `multiplication(a, b)`
  Returns the product of a and b.

- `division(a, b)`
  Returns the quotient of a and b. Throws an error if b is 0.

## Tests

- This project uses Vitest for testing. To run the tests, use the following command:Make sure Vitest is installed into your machine if not check installation [guidelines](https://vitest.dev/guide/)

  ```sh
  npm test
  ```

The tests cover various scenarios for each arithmetic function to ensure correctness.

## Contributing

- Contributions are welcome! Please follow these steps to contribute:

- Fork the repository.
- Create a new branch

```sh
git checkout -b feature-branch
```

- Make your changes.
- Commit your changes

```sh
git commit -m 'Add some feature')
```

- Push to the branch

```sh
git push origin feature-branch
```

- Open a pull request.
