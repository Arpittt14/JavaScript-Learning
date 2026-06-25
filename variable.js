name = "Arpit Patel";
age = 20;
x = null; 
isFollow = false;
isNotFollow = true;
y = undefined;

console.log(x);
console.log(name);
console.log(age);
console.log(isFollow);
console.log(isNotFollow);
console.log(y);

/** 
 * Variable names are case sensitive "a" and "A" are different variables.
 * Only letters, numbers, underscores, and dollar signs can be used in variable names.
 * Variable names cannot start with a number.
 * Reserved words (like JavaScript keywords) cannot be used as variable names.
 */

// Let, Const & Var 

/** 
 * Let, Const, and Var are used to declare variables in JavaScript.
 * Let and Const were introduced in ES6 (2015) to provide more control over variable scope.
 * Var is the older way of declaring variables and has function scope.
 * let allows you to declare block-scoped variables, while const is used to declare variables that cannot be reassigned.
 */

let price = 25; // Block-scoped variable
let fullname = "Kaushal"; // Block-scoped variable 

console.log(price);
console.log(fullname);

const pi = 3.14; // Constant variable
console.log(pi);