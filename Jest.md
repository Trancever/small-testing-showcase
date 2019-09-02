## Introduction to Jest globals

In your test files, Jest automatically puts many useful methods and objects into the global environment. You don't have to require or import anything to use them.

Most important ones:

- `test(name, fn, timeout)` or `it(name, fn, timeout)` - `test` (`it` is an alias) runs the actual test. The first argument is the test name; the second argument is a function that contains the expectations to test. The third argument (optional) is timeout (in milliseconds) for specifying how long to wait before aborting. Note: The default timeout is 5 seconds.

Example:

```js
test('did not rain', () => {
  expect(inchesOfRain()).toBe(0);
});
```

- `describe(name, fn)`- creates a block that groups together several related tests. The first argument is a group name; the second argument is a function that contains tests or other describe functions.

Example:

```js
const label = 'label';

describe('label', () => {
  test('is uppercase', () => {
    expect(label === label.toUpperCase()).toBeFalsy();
  });

  test('is the first letter uppercase', () => {
    expect(label[0] === label[0].toUpperCase()).toBeFalsy();
  });
});
```

- Following functions are often useful if you want to reset some global state that will be used by many tests.
  - `beforeEach(fn, timeout)` - Runs a function before each of the tests in this file runs.
  - `beforeAll(fn, timeout)` - Runs a function before any of the tests in this file run.
  - `afterEach(fn, timeout)` - Runs a function after each one of the tests in this file completes.
  - `afterAll(fn, timeout)` - Runs a function after all the tests in this file have completed.

Full list of the available methods with detailed explanation can be found [here](https://jestjs.io/docs/en/api#methods).

## Expect

The `expect` function is used every time you want to test a value. You will rarely call `expect` by itself. Instead, you will use `expect` along with a "matcher" function to assert something about a value e.g:

```js
const label = 'label';

test('expect', () => {
  expect(label.length).toBe(5)();
});
```

Check [this](https://jestjs.io/docs/en/expect) for more details.

## Jest object

The jest object is automatically in scope within every test file. The methods in the jest object help create mocks and let you control Jest's overall behavior.

There are many useful methods on `jest` object, but most commonly used is `jest.fn()` that creates a mock function.

Example:

```js
const mockFunction = jest.fn();

test('mock function', () => {
  mockFunction();

  expect(mockFunction).toHaveBeenCalled();
});
```

Check [official docs](https://jestjs.io/docs/en/jest-object) for more informations.

## Mock functions

Mock functions are also known as "spies", because they let you spy on the behavior of a function that is called indirectly by some other code, rather than just testing the output. You can create a mock function with jest.fn(). If no implementation is given, the mock function will return undefined when invoked.

We can provide implementation of the mock functions like that:

Example:

```js
const mockFunction = jest.fn(() => true);

test('mock function', () => {
  const value = mockFunction();

  expect(value).toBeTruthy();
});
```

or we can do it by invoking `mockImplementation` function on mock function e.g:

```js
const mockFunction = jest.fn().mockImplementation(scalar => 10 + scalar);

test('mock function', () => {
  const value = mockFunction(20);

  expect(value).toBe(30);
});
```

More details can be found [here](https://jestjs.io/docs/en/mock-function-api).
