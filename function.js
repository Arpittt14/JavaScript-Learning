// Function is a block of code designed to perform a particular task. It can take inputs, process them, and return an output. Functions help in organizing code, making it reusable, and improving readability. 

function myFunction(){
    console.log("Hello, World!");
    console.log("This is a simple function.");
} 

myFunction(); // Calling the function to execute its code 

// Function with parameters 

function greet(name){
    console.log("Hello, " + name + "!");
}   

greet("Alice"); // Calling the function with an argument

// Function with return value

function add(a, b){
    return a + b;
}   

let sum = add(5, 10); // Calling the function and storing the return value
console.log("The sum is: " + sum); // Outputting the result

// Function expression

const multiply = function(x, y){
    return x * y;
};
console.log("The product is: " + multiply(5, 10)); // Outputting the result 

// Arrow function

const divide = (x, y) => {
    return x / y;
};
console.log("The quotient is: " + divide(10, 5)); // Outputting the result      

