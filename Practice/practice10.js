// Create a function using the "Function" keyword that takes a string as an argument &  returns the number of vowels in the string.

function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
} 

