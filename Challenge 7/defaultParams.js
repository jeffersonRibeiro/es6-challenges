/* CHALLENGE 7 - Default parameters

Answer following question:
1. Why on the line 14 we can't simply use following statement:
mult = mult || 2;

Set default value of the mult parameter
in the multiplyBy() function.
*/

"use strict";

const multiplyBy = (a, mult = 2) => a * mult;
console.log(multiplyBy(2, undefined))
module.exports = {
  multiplyBy
}
