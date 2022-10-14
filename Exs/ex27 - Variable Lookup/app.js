// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens

// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)

// Higher Order Function - accepts another function as an argument or returns another function as a result

// Callback Function - passed to an another function as an argument and executed inside that function

function morning(name) {
  //callback function
  return `Good morning ${name.toUpperCase()}`;
}

function afternoon(name) {
  //callback function
  return `Good afternoon ${name.repeat(3)}`;
}

function greet(name, cb) {
  //higher order function
  const myName = "joao";
  console.log(`${cb(name)}, my name is ${myName}`);
}

greet("Bob", morning); //callback functions cant be invoked with ()
greet("Peter", afternoon);
