//Numbers
// JS is Loosely Typed = don't declare type

const number = 34;
const number2 = 2.546;
const number3 = "2.456"; //IT'S A STRING NOT A NUMBER
const add = number + number2;
const sub = number - number2;
const mult = number * number2;
const div = number / number2;

console.log(number);
console.log(number2);
console.log(number3); //will display a different color in console, since it's not a number and the js automatically identifies it as a string

console.log(add);
console.log(sub);
console.log(mult);
console.log(div);

//Numbers Additional Features
// +=, -=, /=, *=, ++, -- %
// Modulus (%) operator returns the remainder after integer division
let specialNumber = 40;
specialNumber += 5;
specialNumber += 5;
specialNumber += 5;
specialNumber += 5;
specialNumber += 5;
specialNumber -= 5;
console.log(specialNumber);

const slices = 10;
const children = 3;
const amount = slices / children;
console.log(amount);

const slices2 = 10;
const children2 = 4;
const remainder = slices2 % children2;
console.log(remainder);

const random = 4 + 6 + 10 * 10;
const random2 = (4 + 6 + 10) * 10;
console.log(random);
console.log(random2);
