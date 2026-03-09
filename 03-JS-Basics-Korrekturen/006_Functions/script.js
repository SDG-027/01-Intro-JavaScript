// Functions
// =========

// #### Part 1: Function Declarations

// 1.  **Declare a function with no parameters that outputs something to the console.**
//     *   Declare a function named `greet` that logs "Hello, World!" to the console.

// function greet() {
//   console.log('Hello, world!');
// }

// const greet = function () {
//   console.log('hello, world');
// };

const greet = () => console.log('hello, world');

greet();

//     *   Call the function.
// 2.  **Declare a function with one parameter that returns something.**

//     *   Declare a function named `square` that takes a number as a parameter and returns its square.
function square(number) {
  return number * number;
}
console.log(square(5));

//     *   Call the function with the argument `5`, store the result in a variable, and output it to the console.

// 3.  **Declare a function with one parameter that performs a control flow with a switch statement and returns accordingly.**

//     *   Declare a function named `getDayName` that takes a number (0-6) as a parameter and returns the name of the day.
//     *   Use a switch statement to determine the day name.

//     *   Call the function with the argument `3`, store the result in a variable, and output it to the console.

function getDayName(dayNumber) {
  switch (dayNumber) {
    case 0:
      return 'Sonntag';
    case 1:
      return 'Montag';
    case 2:
      return 'Dienstag';
    case 3:
      return 'Mittwoch';
    case 4:
      return 'Donnerstag';
    case 5:
      return 'Freitag';
    case 6:
      return 'Samstag';
    default:
      return 'Den Tag gibt es nicht';
  }
}

console.log(getDayName(6));

// #### Part 2: Function Expressions

// 1.  **Repeat the above steps using function expressions assigned to variables.**
//     *   Rewrite the `greet` function as a function expression assigned to a variable named `greetExpression`.

//     *   Rewrite the `square` function as a function expression assigned to a variable named `squareExpression`.

function squareDeclaration(number) {
  return number * number;
}

const squareExpr = function (number) {
  return number * number;
};

const squareArrow = (number) => number * number;

console.log(squareArrow(10));

//     *   Rewrite the `getDayName` function as a function expression assigned to a variable named `getDayNameExpression`.
