// Create an arrow function to perform same task of counting vowels in a string.

const countVowelsArrow = (str) => {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
};
 