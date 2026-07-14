// For a given array with prices of 5 items -> [100, 200, 300, 400, 500]
// all items have an offer of 10% off on them. Change the array to store final price after applying offer on each item. 

let price =[100, 200, 300, 400, 500];

for (let i = 0; i < price.length; i++) {
    price[i] = price[i] - (price[i] * 0.10); // Applying 10% discount
} 

console.log(price);