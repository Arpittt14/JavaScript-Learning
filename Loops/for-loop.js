// For Loop it is used to repeat a block of code a certain number of times. It is often used when the number of iterations is known beforehand.

// Syntax of for loop
// for(initialization; condition; increment/decrement){
//     // code to be executed
// } 

for(let i = 1; i<=5; i++){
    console.log("Arpit Patel"); 
} 

// Calculate the sum of first 10 natural numbers using for loop

let sum = 0;
for(let i = 1; i<=10; i++){
    sum += i; // sum = sum + i;
} 

console.log("The sum of first 10 natural numbers is: " + sum);