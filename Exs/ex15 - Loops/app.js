// Loops
// repeatedly run a block of code while condition is true

//while loop

let amount = 10;

while (amount > 0) {
  console.log("I have " + amount + " dollars and I'm going to the mall");
  amount--;
}

//do while loops
// code block first, condition second
// runs at least once

let money = 12; //as the value is > 10, it'll run only once and not repeat

do {
  console.log("You have " + money + " dollars.");
  money++;
} while (money < 10);

//for loops

let i;

for (i = 0; i < 10; i++) {
  console.log("and the 'i' is: " + i);
}

for (let number = 11; number >= 0; number--) {
  console.log("number is: " + number);
}
