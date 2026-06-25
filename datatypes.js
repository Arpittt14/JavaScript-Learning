// ==========================================
//          JAVASCRIPT DATA TYPES
// ==========================================

/* 💡 MAIN RULE: JavaScript is "Dynamically Typed". 
This means a single variable can hold a number, then a string later. 
You don't need to declare the type explicitly.
*/

// To check the type of any variable, use: typeof variableName


// ------------------------------------------
// 1. PRIMITIVE DATA TYPES (Simple, holds a single value)
// ------------------------------------------

// 👉 NUMBER: Represents both integers and decimals.
let age = 20;               // Integer
let pi = 3.14;              // Decimal/Floating-point
// Special Number values:
let notANumber = NaN;       // Result of an invalid math operation (e.g., "Hello" * 2)
let infinityValue = Infinity; 

// 👉 STRING: Text data, wrapped in quotes.
let single = 'Single quotes';
let double = "Double quotes";
let template = `Backticks`;  // Backticks allow embedding variables: `Age is ${age}`

// 👉 BOOLEAN: Logical values, true or false only.
let isCodingFun = true;
let isExamPassed = false;

// 👉 UNDEFINED: Variable is declared, but has no value assigned yet.
let studentName;            // Value is automatically undefined
console.log(typeof studentName); // Output: "undefined"

// 👉 NULL: Explicitly represents an "empty" or "nothing" value.
let bankBalance = null;     
/* ⚠️ RULE/BUG: typeof null returns "object". 
   This is a famous, historic bug in JavaScript, but it cannot be fixed now. */

// 👉 BIGINT: For ultra-large integers that standard Numbers can't handle.
let hugeNumber = 9007199254740991n; // Ends with an 'n'

// 👉 SYMBOL: Used for creating unique identifiers (mostly advanced use-cases).
let uniqueKey = Symbol("id");


// ------------------------------------------
// 2. NON-PRIMITIVE DATA TYPES (Complex / Reference Types)
// ------------------------------------------

// 👉 OBJECT: Stores collections of data in key-value pairs.
let agency = {
    name: "DuoDigit",
    services: 3,
    isActive: true
};
// Access values using dot notation: agency.name

// 👉 ARRAY: A special type of object used for storing ordered lists.
let programmingLanguages = ["JavaScript", "Python", "Java", "PHP"];
// Access values using index (starts at 0): programmingLanguages[0]


// ------------------------------------------
// 🔥 KEY RULES & BEHAVIORS TO REMEMBER
// ------------------------------------------

/*
   RULE 1: Primitives are immutable (cannot be changed, only overwritten).
   Non-primitives (Objects/Arrays) are mutable (can change internal data).
   
   RULE 2: Type Coercion (Automatic conversion)
   JS tries to be smart, which can lead to weird behavior:
   "5" + 5  // Result: "55" (String wins during addition)
   "5" - 5  // Result: 0    (Number wins during subtraction)
   
   RULE 3: Strict Equality (===) vs Loose Equality (==)
   Always use === because it checks both the Value AND the Data Type.
   5 == "5"   // true  (Checks value only, converts types)
   5 === "5"  // false (Checks type too: Number vs String)
*/