module.exports = function toReadable(number) {

  if (number === 0) return "zero";

  let digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let dozens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  let array = number.toString().split("");
  let readableArray = [];

  while (array.length < 3) {
    array.unshift(0);
  }

  if (array[0] != 0) {
    readableArray.push(digits[array[0]] + " hundred");
  }

  if (array[1] === "1") {
    readableArray.push(teens[array[2]]);
    array[2] = 0;
  } else if (array[1] != 0) {
    readableArray.push(dozens[array[1] - 2]);
  }

  if (array[2] != 0) {
    readableArray.push(digits[array[2]]);
  }

  return readableArray.join(" ").trim();
}

