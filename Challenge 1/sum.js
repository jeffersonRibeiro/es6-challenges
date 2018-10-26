/*
Create a function sum() that will sum all arguments passed to it.
Quantity of the arguments is unknown.

Use console.log() at the end of the sum() function to print result.
Use ES6 whenever possible.
*/

"use strict";

// Write code here
const sum = (...args) => {
  return args.reduce((sum, arg) => sum += arg, 0);
}
  

module.exports = sum;