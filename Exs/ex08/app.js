// Arrays, Functions and Objects
// Arrays - [], 0 index based

const friends = ["john", "peter", "jorge", "pedro", 45, undefined, null];
console.log(friends[4]); //o numero dentro do [] define qual item do array sera retornado

let bestFriend = friends[1];
console.log(bestFriend);

friends[4] = "OUTRO"; //é possivel mudar o valor dentro de um item especifico do array
console.log(friends);
