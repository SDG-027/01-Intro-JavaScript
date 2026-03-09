// Conditionals
// ============

// **Objective:**

// Write JavaScript code that provides clothing advice based on the current temperature. This exercise will help you learn how to use different types of conditional statements effectively.

// #### Tasks:

// 1.  Define a variable `temperature` and set it to any integer to represent the temperature in degrees Celsius.
// let temperature = 15;
// 2.  Use `if/else` to advise wearing a coat if the temperature is below 15 degrees.

// 3.  Use `if/else if/else` to give advice based on three temperature ranges:
//     *   Below 15 degrees: suggest a coat.
//     *   Between 15 and 25 degrees: suggest a sweater.
//     *   Above 25 degrees: suggest a t-shirt.
// if (temperature < 15) {
//   console.log('Tu was du willt; es ist aber kalt!');
// } else if (temperature >= 15 && temperature < 25) {
//   console.log('Trage einen Sweater');
// } else {
//   console.log('Trage ein T-Shirt');
// }

// 4.  Use a `switch` statement to provide advice based on specific temperatures (just a few for example): 10, 20, and 30 degrees.

let temperature = 17;
switch (temperature) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    console.log('Tu was du willt; es ist aber kalt!');
    break;
  case 20:
    console.log('Trage einen Sweater');
    break;
  case 30:
    console.log('Trage ein T-Shirt');
    break;
  default:
    console.log('Zieh dir immerhin was an');
}

switch (true) {
  case temperature > 15 && temperature < 25:
    console.log('Mittelwarm');
}

// 5.  Print the results for each task to the console.
