function calculateTotal(subTotal, tax) {
  const total = subTotal + tax;
  return total;
}

console.log(calculateTotal(200, 20));

const order1 = calculateTotal(100, 10);
const order2 = calculateTotal(50, 5);
const order3 = calculateTotal(25, 5);

console.log(order1, order2, order3);

/*refactoring to function expression:*/
const calculateTotalRefactored = function (subTotal, tax) {
  const total = subTotal + tax;
  return total;
};

console.log(calculateTotalRefactored(200, 20));
