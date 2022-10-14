// Local Scope
// can't be acessed from outside code blocks
// if - NOT VAR

let name = "bob";

function calculate() {
  const name = "john"; //cant access outside the local scope
  becomesGlobal = "global variable"; //if not used with keyword (not a var, const, let), it can be accessed from global scope
}
calculate();
console.log(becomesGlobal);

if (true) {
  const name = "josh";
}

console.log(`my name is ${name}`);
