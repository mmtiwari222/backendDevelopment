// Conditional in JavaScript
// Conditional statements are used to perform different actions based on different conditions.
// There are three types of conditional statements in JavaScript:
// 1. if statement - used when you have one condition to check
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}

// 2. if-else statement - used when you have two conditions to check
// if the condition is true, the code inside the if block will be executed, otherwise the code inside the else block will be executed
age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// 3. if-else if-else statement - used when you have multiple conditions to check
age = 20;
if (age < 13) {
  console.log("You are a child.");
} else if (age < 20) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}

// 4. nested if statement - used when you have a condition inside another condition
age = 25;
if (age >= 18) {
  console.log("You are an adult.");
  if (age >= 21) {
    console.log("You can go to a bar.");
  } else {
    console.log("You cannot go to a bar.");
  }
}

// 4. switch statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day.");
    break;
}
