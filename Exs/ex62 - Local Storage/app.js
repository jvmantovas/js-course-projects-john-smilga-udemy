// Web Storage API - provided by browser
// session storage, local storage
// setItem, getItem, removeItem, clear

// localStorage.setItem("name", "john"); // storages in browser, can be reached from different tabs
// sessionStorage.setItem("name", "john"); //storages only in current tab

localStorage.setItem("name", "joao");
localStorage.setItem("friend", "peter");
localStorage.setItem("job", "developer");
localStorage.setItem("address", "rua dos bobos, 0");

const name = localStorage.getItem("name");
console.log(name);

localStorage.removeItem("name");

const anotherName = localStorage.getItem("name");
console.log(anotherName);

localStorage.clear();
