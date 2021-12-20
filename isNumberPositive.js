"use strict";

function isPositive(a) {
  let result = "YES";

  if (a < 0) {
    throw new Error("Error with message = Negative Error.");
  } else if (a === 0) {
    throw new Error("Error with message = Zero Error.");
  }

  return result;
}
try {
  console.log(isPositive(0));
} catch (e) {
  console.log(e.message);
}

