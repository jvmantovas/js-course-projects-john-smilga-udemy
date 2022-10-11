// Conditional Statements
// Comparision Operators \/
// >, <, >=, <=, ==, ===, !=, !===
//else if and !

const value = 2 > 1;
const value2 = 1 > 2;

if (value2) {
  console.log("hello world!");
} else {
  console.log("Value is not true!");
}

//bigger or equal to
const num1 = 6;
const num2 = 6;
const result = num1 >= num2;

if (num1 > num2) {
  console.log("num1 is bigger than num2.");
} else if (result) {
  console.log("num1 is equal to num2.");
} else {
  console.log("num2 is bigger than num1.");
}

//not true !
const value1 = false;

if (!value1) {
  console.log("The value is false");
}

//equality
// == and != checks only value
// === and !== checks value and type

const n1 = 6; // type number
const n2 = "6"; //type is different (string)
const value3 = n1 == n2;
const value4 = n1 === n2;

console.log(value3);
console.log(value4);

//Logical Operators
// (|| - OR), (&& - AND), !

const name = "Peter";
const age = 24;

if (name === "Bob" || age === 24) {
  console.log("Hello there, Bob");
} else {
  console.log("Wrong values");
}

if (name !== "Bob" && age === 24) {
  console.log("Hello there, Peter");
} else {
  console.log("Wrong values");
}

//Switch
// dice values: 1-6

const dice = 6;

switch (dice) {
  case 1:
    console.log("You got one.");
    break;
  case 2:
    console.log("You got two.");
    break;
  case 3:
    console.log("You got three.");
    break;
  case 4:
    console.log("You got four.");
    break;
  case 5:
    console.log("You got five.");
    break;
  case 6:
    console.log("You got six.");
    break;
  default:
    console.log("You did not roll the dice!");
}
