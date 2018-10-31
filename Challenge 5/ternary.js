/* CHALLENGE 5 - Ternary Operator

Change contents of the isNumber function
using ternary operator.
*/

"use strict";

const isNumber = a => (
  typeof a === "number" ? "That's number": "That's not a number"
);

module.exports = {
  isNumber
}
