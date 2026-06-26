
// ======================================
// 1. IF STATEMENT
// ======================================

// Used when you want to run code only if condition is true

let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote");
}
// Output: You are eligible to vote


// ======================================
// 2. IF...ELSE STATEMENT
// ======================================

// Used when there are 2 possibilities (true or false)

let marks = 40;

if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}
// Output: Pass


// ======================================
// 3. IF...ELSE IF...ELSE LADDER
// ======================================

// Used when multiple conditions are checked

let score = 75;

if (score >= 90) {
    console.log("Grade A");
} 
else if (score >= 75) {
    console.log("Grade B");
} 
else if (score >= 50) {
    console.log("Grade C");
} 
else {
    console.log("Fail");
}
// Output: Grade B


// ======================================
// 4. NESTED IF STATEMENT
// ======================================

// IF inside IF

let userAge = 20;
let hasID = true;

if (userAge >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    } else {
        console.log("ID required");
    }
} else {
    console.log("Not allowed");
}
// Output: Entry allowed


// ======================================
// 5. SWITCH STATEMENT
// ======================================

// Used when checking one value against many cases

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
    default:
        console.log("Invalid day");
}
// Output: Wednesday


// ======================================
// 6. TERNARY OPERATOR (SHORT IF-ELSE)
// ======================================

// Syntax: condition ? true : false

let number = 10;

let result = (number % 2 === 0) ? "Even" : "Odd";

console.log(result);
// Output: Even


// ======================================
// 7. MULTIPLE CONDITIONS USING LOGICAL OPERATORS
// ======================================

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}
// Output: Login successful


// ======================================
// 8. TRUTHY / FALSY VALUES
// ======================================

// JavaScript automatically converts values to true/false

if (0) {
    console.log("This will NOT run");
}

if (1) {
    console.log("This will run");
}

if ("") {
    console.log("Empty string won't run");
}

if ("hello") {
    console.log("Non-empty string runs");
}

// Falsy values:
// false, 0, "", null, undefined, NaN

// ======================================
// 9. REAL LIFE EXAMPLE (LOGIN SYSTEM)
// ======================================

let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome to dashboard");
} else {
    console.log("Please login first");
}

// ======================================
// END
// ======================================