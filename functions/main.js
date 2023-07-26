// Write a function called add7 that takes one number and returns that number + 7.

add7 = (num) => {
  return num + 7;
};

console.log(add7(3));

// Write a function called multiply that takes 2 numbers and returns their product.

multiTwo = (n1, n2) => {
  return n1 * n2;
};

console.log(multiTwo(2, 3));

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

capitalize = (str) => {
  return (capital = str.charAt(0).toUpperCase() + str.slice(1));
};

console.log(capitalize("earth"));

// Write a function called lastLetter that takes a string and returns the very last letter of that string:

lastLetter = (str) => {
  return str.slice(-1);
};

console.log(lastLetter("holiday"));

// Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

let answer = parseInt(prompt("Please enter a number."));

for (let i = 0; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
