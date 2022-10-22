/* setInterval - runs function repeatedly, at specific intervals

- pass function reference
- duration in ms (1000ms = 1 second)
- default 0, will cover more extensively in async/await section
- returns unique identifier
- clearInterval to cancel */

function showScore(name, score) {
  console.log(`hello ${name}, your score is ${score}`);
}

const firstID = setInterval(showScore, 1000, "bobo", 45);
const secondtID = setInterval(showScore, 4000, "susan", 88);

clearInterval(firstID);
