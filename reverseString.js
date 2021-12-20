"use strict";

function reverseString(str) {
  let res;
  try {
    res = str.split("").reverse().join("");
  } catch (e) {
    return `Error argument is a not string  ${str}`;
  }

  return res;
}

console.log(reverseString("hello"));
