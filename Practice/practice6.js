// create a game where user has to guess a number between 1 to 10, if user guesses the correct number then print "You guessed it right!" otherwise print "Try again!" and keep asking the user to guess until he guesses the correct number.

gameNum = 14;

let userNum = prompt("Enter a number :");

while (userNum != gameNum) {
    console.log("Try again!");
    userNum = prompt("Enter a number :");
}
console.log("You guessed it right!");