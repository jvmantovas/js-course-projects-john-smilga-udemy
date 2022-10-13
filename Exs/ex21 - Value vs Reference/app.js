// Reference vs Value
// Primitive Data types
// String, Number, Symbol, Boolean, Undefined, Null
// Arrays, Functions, Objects = object
//typeof

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value

const number = 1; //number = primitive
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references

let person = { name: "bob" }; //object = non-primitive
let person2 = person;
person2.name = "susy";
console.log(`the 1 person's name is ${person.name}`);
console.log(`the 2 person's name is ${person2.name}`);
