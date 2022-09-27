// Arrays, Functions and Objects
//return
// default undefined, shortcuts, ignores after

// 1 inch = 2.54cm

function calculate(value) {
  console.log("The value in cm is: " + value * 2.54 + "cm.");
  return value * 2.54;
}

const width = calculate(100);
const wallHeight = 80;
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);
