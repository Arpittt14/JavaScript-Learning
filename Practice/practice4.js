// Write a code which can give grades to students according to their scores;

// 90-100: A
// 70-89: B
// 60-69: C
// 50-59: D
// 0-49: F 

let number = prompt("Enter your score:");

if (number >= 90 && number <= 100) {
    console.log("Your grade is A");
} else if (number >= 70 && number <= 89) {
    console.log("Your grade is B");
} else if (number >= 60 && number <= 69) {
    console.log("Your grade is C");
} else if (number >= 50 && number <= 59) {
    console.log("Your grade is D");
} else if (number >= 0 && number <= 49) {
    console.log("Your grade is F");
} else{
    console.log("Invalid score");
}