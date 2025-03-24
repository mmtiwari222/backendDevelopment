// Loops in JavaScript
// loop - a programming construct that repeats a block of code as long as a specified condition is true
// There are several types of loops in JavaScript:

// 1. for loop
// 1st parameter: initialization - executed once before the loop starts
// 2nd parameter: condition - evaluated before each iteration of the loop
// 3rd parameter: increment/decrement - executed at the end of each iteration of the loop
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log("Even number: " + i);
  } else {
    console.log("Odd number: " + i);
  }
}

for (let i = 1; i <= 10; i++) {
  console.log("2 * " + i + " = " + 2 * i);
}

// nested for loops
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log("i: " + i + ", j: " + j);
  }
}

// 2. while loop
// The while loop continues to execute
// as long as the specified condition is true or until the specified condition becomes false
let i = 1;
while (i <= 10) {
  console.log("2 * " + i + " = " + 2 * i);
  i++;
}
// Nested while loops
let x = 1;
while (x <= 5) {
  let y = 1;
  while (y <= 5) {
    let z = 1;
    while (z <= 5) {
      console.log("x: " + x + ", y: " + y + ", z: " + z);
      z++;
    }
    y++;
  }
  x++;
}

// 3. do while loop
// The do while loop is similar to the while loop, but it guarantees that the block of code will be executed at least once
let j = 1;
do {
  console.log("2 * " + j + " = " + 2 * j);
  j++;
} while (j >= 10);

// break and continue statements
// break statement - used to exit a loop prematurely
// continue statement - used to skip the current iteration and move to the next iteration

for (let i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    continue; // skip even numbers
  } else if (i % 8 == 0) {
    break; // exit the loop when i is 10
  }
  console.log("Even number: " + i);
}
