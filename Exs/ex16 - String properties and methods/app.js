// String properties and methods
// wrapper String Object, don't memorize methods

let text = "Peter Jordan";
let result = text.length;
console.log(result);

console.log(text.length); //property

console.log(text.toLowerCase()); //method
console.log(text.toUpperCase()); //method
console.log(text.charAt(0)); //method
console.log(text.charAt(11)); //method
console.log(text.charAt(text.length - 1)); //method
console.log(text.indexOf("e")); //method
console.log(text.trim()); //method
console.log(text.trim().toLowerCase().startsWith("peter")); //method
console.log(text.includes("eter")); //method
console.log(text.slice(0, 3)); //method
console.log(text.slice(-5)); //method
