// Prompt the user to enter their full name. Genrate a username for them based on the input. Start username with @, followed by their full name and ending with the full name length. For example, if the user enters "John Doe", the username should be "@John Doe7". 

let fullName = prompt("Enter your full name:");
let username = "@" + fullName + fullName.length;
console.log(username); 