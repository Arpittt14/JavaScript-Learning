// String is a built-in object in JavaScript that allows you to work with text. It provides various methods and properties to manipulate and analyze strings. Here are some common operations you can perform with strings in JavaScript:

// 1. Creating Strings
let str1 = "Hello, World!";
let str2 = 'JavaScript is awesome!';
let str3 = `Template literals allow for multi-line strings and interpolation.`; 

// 2. String Length
let lengthOfStr1 = str1.length; 

// 3. Accessing Characters
let firstChar = str1[0]; 
let lastChar = str1[str1.length - 1]; 

// 4. Template Literals

let obj = {
    name: "John",
    age: 30
};

let output = `Hello, my name is ${obj.name} and I am ${obj.age} years old.`; 
let output2 = "Hello " + obj.name + " and I am " + obj.age + " years old."; 

console.log(output); // Output: Hello, my name is John and I am 30 years old.
console.log(output2); // Output: Hello John and I am 30 years old.

// 5. String Methods

let sampleStr = "JavaScript is fun!";

let upperCaseStr = sampleStr.toUpperCase(); 
let lowerCaseStr = sampleStr.toLowerCase(); 
let indexOfIs = sampleStr.indexOf("is"); 
let slicedStr = sampleStr.slice(0, 10); 
let replacedStr = sampleStr.replace("fun", "awesome"); 
let trimmedStr = sampleStr.trim();

console.log(upperCaseStr); // Output: JAVASCRIPT IS FUN!
console.log(lowerCaseStr); // Output: javascript is fun!
console.log(indexOfIs); // Output: 10
console.log(slicedStr); // Output: JavaScript
console.log(trimmedStr); // Output: JavaScript is fun!
console.log(replacedStr); // Output: JavaScript is awesome!