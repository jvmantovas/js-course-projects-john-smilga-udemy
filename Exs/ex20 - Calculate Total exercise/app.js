// Functions, return, if, arrays, for loop

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log("Whoa! You're spending way too much");
    return total;
  }
  console.log("You're good, total is less than 100");
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const finalTotal = gasTotal + foodTotal;

console.log({
  gas: gasTotal,
  food: foodTotal,
  total: finalTotal,
});
