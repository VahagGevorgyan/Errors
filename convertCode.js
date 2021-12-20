"use strict";

function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
    return s;
  } catch (e) {
    return "s.split is not a function";
  }

}
console.log(reverseString(34))