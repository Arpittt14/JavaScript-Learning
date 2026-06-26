// ======================================
// JavaScript Operators Notes
// ======================================

// Operators are symbols that perform operations on values and variables.

// ======================================
// 1. Arithmetic Operators
// ======================================

let a = 10;
let b = 5;

console.log(a + b); // Addition -> 15
console.log(a - b); // Subtraction -> 5
console.log(a * b); // Multiplication -> 50
console.log(a / b); // Division -> 2
console.log(a % b); // Modulus (Remainder) -> 0
console.log(a ** b); // Exponent (10^5) -> 100000
console.log(a++); // Post Increment -> prints 10, then becomes 11
console.log(++a); // Pre Increment -> becomes 12, then prints 12
console.log(a--); // Post Decrement
console.log(--a); // Pre Decrement

// ======================================
// 2. Assignment Operators
// ======================================

let x = 10;

x += 5; // x = x + 5
console.log(x); // 15

x -= 3; // x = x - 3
console.log(x); // 12

x *= 2; // x = x * 2
console.log(x); // 24

x /= 4; // x = x / 4
console.log(x); // 6

x %= 4; // x = x % 4
console.log(x); // 2

x **= 3; // x = x ** 3
console.log(x); // 8

// ======================================
// 3. Comparison Operators
// Returns true or false
// ======================================

let p = 10;
let q = "10";

console.log(p == q); // true (checks only value)
console.log(p === q); // false (checks value + datatype)

console.log(p != q); // false
console.log(p !== q); // true

console.log(p > 5); // true
console.log(p < 5); // false
console.log(p >= 10); // true
console.log(p <= 9); // false

// ======================================
// 4. Logical Operators
// ======================================

let age = 20;
let hasLicense = true;

console.log(age >= 18 && hasLicense); // true
// AND -> both conditions must be true

console.log(age < 18 || hasLicense); // true
// OR -> at least one condition must be true

console.log(!hasLicense); // false
// NOT -> reverses the boolean value

// ======================================
// 5. String Operator
// ======================================

let firstName = "Arpit";
let lastName = "Patel";

console.log(firstName + " " + lastName);
// String Concatenation

// ======================================
// 6. Ternary Operator
// Short form of if...else
// ======================================

let marks = 75;

let result = marks >= 35 ? "Pass" : "Fail";

console.log(result);

// Syntax:
// condition ? trueValue : falseValue

// ======================================
// 7. Type Operators
// ======================================

console.log(typeof 100); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (JavaScript quirk)
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () {}); // function

// ======================================
// 8. Nullish Coalescing Operator (??)
// ======================================

let username = null;

console.log(username ?? "Guest");
// If value is null or undefined, returns "Guest"

// ======================================
// 9. Optional Chaining (?.)
// ======================================

let user = {
    name: "Arpit"
};

console.log(user.address?.city);
// undefined (No error even though address doesn't exist)

// ======================================
// 10. Spread Operator (...)
// ======================================

let nums1 = [1, 2, 3];
let nums2 = [4, 5, 6];

let allNumbers = [...nums1, ...nums2];

console.log(allNumbers);

// ======================================
// 11. Rest Operator (...)
// ======================================

function sum(...numbers) {
    console.log(numbers);
}

sum(10, 20, 30, 40);

// ======================================
// 12. Bitwise Operators (Advanced)
// ======================================

console.log(5 & 1); // AND
console.log(5 | 1); // OR
console.log(5 ^ 1); // XOR
console.log(~5); // NOT
console.log(5 << 1); // Left Shift
console.log(5 >> 1); // Right Shift

// ======================================
// 13. Operator Precedence
// ======================================

console.log(5 + 2 * 3);
// Multiplication happens first
// Output: 11

console.log((5 + 2) * 3);
// Parentheses have highest priority
// Output: 21

// ======================================
// End of Operators
// ======================================