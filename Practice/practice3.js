// get user input a number using prompt("Enter a number :" ) , check the number is multiple of 5 or not 

let number = prompt("Enter a Number:");

if (number % 5 === 0 ){
    console.log(number + " is a multiple of 5");
} else {
    console.log(number + " is not a multiple of 5");
}