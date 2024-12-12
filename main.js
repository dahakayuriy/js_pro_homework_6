"use strict";

const input = prompt("Enter a three-digit number:");

if (input === null) {
  alert("Exit the application.");
} else {
  const trimmedInput = input.trim();
  const number = Number(trimmedInput);

  if (
    !trimmedInput ||
    isNaN(number) ||
    !Number.isInteger(number) ||
    Math.abs(number) < 100 ||
    Math.abs(number) > 999
  ) {
    alert("Error: invalid three-digit number entered.");
  } else {
    const absNumber = Math.abs(number);
    const digits = String(absNumber).split("").map(Number);

    const allSame = digits.every((digit) => digit === digits[0]);

    const hasDuplicates = new Set(digits).size < digits.length;

    if (allSame) {
      alert("All digits are the same.");
    } else if (hasDuplicates) {
      alert("There are duplicates among the digits.");
    } else {
      alert("All digits are different.");
    }
  }
}
