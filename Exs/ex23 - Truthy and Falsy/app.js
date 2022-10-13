// Truthy and Falsy
// Falsy = "", '', ``, 0, -0, NaN, false, null, undefined
// Everything else is Truthy

const text = ""; //an empty string is a Falsy value

if (text) {
  console.log("hey the value is Truthy");
} else {
  console.log("hey the value is Falsy");
}
