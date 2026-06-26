// for-in loop is used to iterate over the properties of an object. The syntax for a for-in loop is as follows:
// for (const key in object) {
//     // code block to be executed
// } 

let student = {
    name: "Arpit Patel",
    age: 20,
    grade: "A"
}; 

for(let key in student){
    console.log(key);
}