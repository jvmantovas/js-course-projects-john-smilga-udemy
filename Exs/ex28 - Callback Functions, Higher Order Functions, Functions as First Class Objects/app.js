// Variable Lookup
// {} - code block

const globalNumber = 5; //will be last used

function add(num1, num2) {
  const globalNumber = 20; //will be second used
  const result = num1 + num2 + globalNumber;
  function multiply() {
    const globalNumber = 100; // first used in the scope
    const multiplyResult = result * globalNumber;
    console.log(multiplyResult);
  }
  multiply();
  return result;
}

console.log(add(3, 4));
