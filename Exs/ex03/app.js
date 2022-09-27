// Variable - Most Basic Building block
// Variables - Store, Access, Modify === Value
// Declare, Assignment Operator, Assign Value
// Assign value later, modify existing

let name = "John Mantovas";
let address, zip, state; //variaveis sem valor
address = "101 main street"; //valor adicionado depois
zip = "60612";
state = "Califa";
name = "Not Mantovas"; //Modificando valor anterior

console.log(name);
console.log(address, zip, state);

// Regras de nomeação de variaveis

// Can contain digits, letters, underscore, $
// Must start with letter, $ or _
// No keyword and cannot start with a number
// Case sensitive - fullname vs Fullname
// camelCase or underscore

let $randomNumber123_ = "random";
console.log($randomNumber123_);

// LET vs CONST vs VAR

//using var (after ES6 isnt used anymore)
var value = "some value";

//using let - can be re-assigned
let nome = "john";

//using const (CONSTANT) - can't re-assign (most used)
const lastName = "mantovas";

console.log(value);
console.log(nome);
console.log(lastName);
