const car = {
  make: "Chevrolet",
  model: "Monza",
  year: 1997,
  colors: ["white", "red", "grey", "black"],
  hybrid: false,
  drive: function () {
    console.log("You started driving the car.");
  },
  stop() {
    console.log("You stopped the car.");
  },
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();
