// Select the element or group of elements by tag name
// Decide the effect we want to apply to the selection

// getElementsByTagName('tagname');
// HTMLCollection = array-like object
// index, length property but not array methods (forEach)

const headings = document.getElementsByTagName("h2");
headings[0].style.color = "red";
console.log(headings); //returns HTMLCollection
console.log(headings.length);

// querySelectorAll() in most cases
// NodeList - objects are collections of nodes
// can run forEach()
// turn them into array - spread operator [...]
// after that we can use any array properties

const items = document.getElementsByTagName("li");
items[2].style.color = "orange";
console.log(items);

const betterItems = [...items];
betterItems.forEach(function (item) {
  console.log(item);
});
console.log(betterItems);
