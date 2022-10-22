/*
setTimeout - runs once after specific time

- pass function reference
- duration in ms (1000ms = 1 second)
- default 0, will cover more extensively in async/await section
- retunrs unique identifier
- clearTimeout to cancel
- on window object 
*/

function sayHello() {
  console.log("hello john");
}

setTimeout(sayHello, 1000);

// alternative approach,ES6 arrow functions
setTimeout(() => {
  console.log("goodbye");
}, 2000);

//pass arguments
function showScore(name, score) {
  console.log(`hello ${name}, this is your score: ${score}`);
}

const firstID = setTimeout(showScore, 1000, "johnatas", 34);
const secondID = setTimeout(showScore, 1000, "pedrim", 03);

console.log(firstID);
console.log(secondID);

clearTimeout(firstID);
