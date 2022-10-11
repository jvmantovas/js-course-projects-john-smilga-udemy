// Template Literals - ES6+
// Backtick characters `` - above tab (left from one)
// Interpolation ${} - insert expression (value)

const name = "John";
const age = 25;

const sentence = "Hey it's " + name + " and he is " + age + " years old.";
console.log(sentence);

//backtick + interpolation
const value = `Hey it's ${name} and he is ${age} years old. And here is some simple math ${
  5 + 2
}`;

console.log(value);
