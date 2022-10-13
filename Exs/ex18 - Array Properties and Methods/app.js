// Array Properties and Methods
let names = ["john", "bobo", "barry", "olga", "ben"];

//length
console.log(names.length);
console.log(names[names.length - 1]);

//concat
const lastNames = ["pepper", "onion", "banana"];
const allNames = names.concat(lastNames);
console.log(allNames);

//reverse
console.log(allNames.reverse());

//unshift
allNames.unshift("susy"); //add to start
console.log(allNames);

//shift
allNames.shift(); //removes first
console.log(allNames);

//push
allNames.push("Susana"); //add to end
allNames.push("Bob");
console.log(allNames);

//pop
allNames.pop(); //removes last
console.log(allNames);

//splice - mutates original array
const specificNames = allNames.splice(2, 1);
console.log(specificNames);
console.log(allNames);
