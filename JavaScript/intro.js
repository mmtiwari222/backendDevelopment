// JavaScript - Introduction
// This file contains the introduction to JavaScript.

// JavaScript is a high-level, interpreted programming language that is widely used for web development.
// It was created by Brendan Eich in 1995 and has since become one of the core technologies of the World Wide Web.
// JavaScript is a versatile language that can be used for both client-side and server-side development.

// node.js - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
// It allows developers to run JavaScript on the server side, enabling the creation of scalable and high-performance applications.

// print in JavaScript
console.log("Hello, World!");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// variables in JavaScript
// Variables are used to store data in JavaScript.
// There are three ways to declare variables in JavaScript: var, let, and const.

// var - Declares a variable that can be re-assigned.
// It has function scope or global scope.
// It is the oldest way to declare a variable in JavaScript.
var name = "John Doe";
console.log(name); // Output: John Doe

// let - Declares a block-scoped variable that can be re-assigned.
// It is the modern way to declare a variable in JavaScript.
let id = 30;
console.log(id); // Output: 30

// const - Declares a block-scoped variable
// that cannot be re-assigned.
const pi = 3.14;
console.log(pi); // Output: 3.14

// naming conventions for variables
// start variable names with a letter, underscore (_), or dollar sign ($).
// do not use spaces in variable names or special characters.
// Variable names should not start with a number.
// any subsequent characters can be letters, numbers, underscores, or dollar signs.
// Variable names are case-sensitive.
// avoid using reserved keywords as variable names.

// suggested naming conventions:
// Use camelCase for variable names (e.g., firstName, lastName).
// Variable names should be descriptive and meaningful.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Data Types in JavaScript
// JavaScript has basically 2 types of data types:
// 1. Primitive Data Types  - Primitive data types represent single, immutable values. "Immutable" means that once a primitive value is created, it cannot be changed.
//    - String: Represents a sequence of characters.
let greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World!

//    - Number: Represents numeric values.
let score = 30;
console.log(score); // Output: 30

//    - Boolean: Represents a true or false value.
let isActive = true;
console.log(isActive); // Output: true

//    - Undefined: Represents a variable that has been declared but has not yet been    assigned a value.
let unassignedVariable;
console.log(unassignedVariable); // Output: undefined

//    - Null: Represents a variable that has been explicitly assigned no value.
let emptyValue = null;
console.log(emptyValue); // Output: null

//    - Symbol: Represents a unique and immutable value.
let uniqueSymbol = Symbol("unique");
console.log(uniqueSymbol); // Output: Symbol(unique)

//    - BigInt: Represents integers with arbitrary precision.
let bigIntValue = BigInt(1234567890123456n);
console.log(bigIntValue); // Output: 1234567890123456n

// 2. None-primitive data types or Reference data types - Reference data types represent collections of values or more complex entities and are mutable.
//    - Object: Represents a collection of key-value pairs.
let person = {
  name: "John Doe",
  age: 30,
  isActive: true,
};
console.log(person); // Output: { name: 'John Doe', age: 30, isActive: true }
//    - Array: Represents an ordered list of values.
let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ]

//    - Function: Represents a block of code that can be called and executed
function greet() {
  console.log("Hello, World!");
}
greet(); // Output: Hello, World!

// Typeof operator - The typeof operator is used to determine the type of a variable or value.
console.log(typeof greeting); // Output: string
console.log(typeof score); // Output: number
console.log(typeof isActive); // Output: boolean
console.log(typeof unassignedVariable); // Output: undefined
console.log(typeof emptyValue); // Output: object
console.log(typeof uniqueSymbol); // Output: symbol
console.log(typeof bigIntValue); // Output: bigint
console.log(typeof person); // Output: object
console.log(typeof fruits); // Output: object
console.log(typeof greet); // Output: function
console.log(typeof null); // Output: object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Operators in JavaScript
// Operators are used to perform operations on variables and values.
// There are several types of operators in JavaScript:

// 1. Arithmetic Operators - Used to perform basic mathematical operations.
let a = 10;
let b = 5;
let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus
let exponent = a ** b; // Exponentiation
console.log(sum); // Output: 15
console.log(difference); // Output: 5
console.log(product); // Output: 50
console.log(quotient); // Output: 2
console.log(remainder); // Output: 0
console.log(exponent); // Output: 100000

// 2. Assignment Operators - Used to assign values to variables.
let x = 10; // Assignment
x += 5; // Addition assignment (x = x + 5)
x -= 3; // Subtraction assignment (x = x - 3)
x *= 2; // Multiplication assignment (x = x * 2)
x /= 4; // Division assignment (x = x / 4)
x %= 3; // Modulus assignment (x = x % 3)
console.log(x); // Output: 0

// 3. Comparison Operators - Used to compare two values.
let isEqual = a == b; // Equal to
let isNotEqual = a != b; // Not equal to
let isStrictEqual = a === b; // Strict equal to
let isStrictNotEqual = a !== b; // Strict not equal to
let isGreaterThan = a > b; // Greater than
let isLessThan = a < b; // Less than
let isGreaterThanOrEqual = a >= b; // Greater than or equal to
let isLessThanOrEqual = a <= b; // Less than or equal to
console.log(isEqual); // Output: false
console.log(isNotEqual); // Output: true
console.log(isStrictEqual); // Output: false
console.log(isStrictNotEqual); // Output: true
console.log(isGreaterThan); // Output: false
console.log(isLessThan); // Output: true
console.log(isGreaterThanOrEqual); // Output: false
console.log(isLessThanOrEqual); // Output: true

// 4. Logical Operators - Used to perform logical operations.
let andOperator = true && false; // Logical AND - returns true if both operands are true
let orOperator = true || false; // Logical OR - returns true if at least one operand is true
let notOperator = !true; // Logical NOT - returns true if the operand is false
console.log(andOperator); // Output: false
console.log(orOperator); // Output: true
console.log(notOperator); // Output: false

// increment and decrement operators
// Increment operator (++) - Increases the value of a variable by 1.
let increment = 5;
let preIncremented = increment++; // Post-increment - first assign then increment
console.log(preIncremented); // Output: 5
let postIncremented = ++increment; // Pre-increment - first increment then assign
console.log(postIncremented); // Output: 6

// Decrement operator (--) - Decreases the value of a variable by 1.
let decrement = 5;
let preDecremented = decrement--; // Post-decrement - first assign then decrement
console.log(preDecremented); // Output: 5
let postDecremented = --decrement; // Pre-decrement - first decrement then assign
console.log(postDecremented); // Output: 4

// 5. Ternary Operator - A shorthand way to write an if-else statement.
let age = 18;
let isAdult = age >= 18 ? "Adult" : "Minor"; // If age is greater than or equal to 18, assign "Adult", otherwise assign "Minor"
console.log(isAdult); // Output: Adult

// 6. Bitwise Operators - Used to perform bit-level operations on numbers.
let bitwiseAnd = a & b; // Bitwise AND - checks if both bits are 1 then returns 1 otherwise returns 0
let bitwiseOr = a | b; // Bitwise OR - checks if at least one bit is 1 then returns 1 otherwise returns 0
let bitwiseXor = a ^ b; // Bitwise XOR - checks if both bits are different then returns 1 otherwise returns 0
let bitwiseNot = ~a; // Bitwise NOT -  inverts the bits of a number
let leftShift = a << 1; // Left shift - shifts the bits of a number to the left by a specified number of positions
let rightShift = a >> 1; // Right shift - shifts the bits of a number to the right by a specified number of positions
console.log(bitwiseAnd); // Output: 0
console.log(bitwiseOr); // Output: 15
console.log(bitwiseXor); // Output: 15
console.log(bitwiseNot); // Output: -11
console.log(leftShift); // Output: 20 - double the value
console.log(rightShift); // Output: 5 - half the value

//
