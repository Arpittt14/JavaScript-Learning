// Arrays are used to store multiple values in a single variable. They are a fundamental data structure in JavaScript and many other programming languages. Arrays can hold values of any type, including numbers, strings, objects, and even other arrays. 

// In JavaScript, arrays are created using square brackets [] and can be initialized with values. For example: 

let marks = [85, 90, 78, 92, 88]; // An array of numbers
console.log(marks); // Output: [85, 90, 78, 92, 88]

console.log(marks.length); // Output: 5

typeof marks; // Output: object


// Array Indices: Each element in an array has an index, which is a numerical representation of its position in the array. The first element has an index of 0, the second element has an index of 1, and so on. You can access elements in an array using their indices. For example:

console.log(marks[0]);

// Looping over an arrays: You can use loops to iterate over the elements of an array. The most common loop used for this purpose is the for loop. For example: 
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

// for of loop: The for of loop is a more concise way to iterate over the elements of an array. It automatically handles the indexing for you. For example:
for (let mark of marks) {
    console.log(mark);
}