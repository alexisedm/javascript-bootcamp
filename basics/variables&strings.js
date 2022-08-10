'use strict';


//let / const

let age;
age = 26;

//const we can acces before even created
console.log(age);

//we neeed give it a value
const edad = '26';

// error we cant change the value const represent dont change when initializes 
//edad = 26; 



// Challenge 1: We want to log out the name "Reed", but it doesn't work. Can you fix it?
const name = "Reed";
console.log(name);

// Challenge 2: We want 102 to be logged out. But we're getting an error instead. Try to fix it!
let count = 100;
count = 101;
count = 102;
console.log(count);

//  Challenge 3: We want to log out the price (50), but it doesn't work. Can you fix it?
let price;
price = 50;
console.log(price);

// const - restrictions that make code more readable
const originalPrice = 50;
const percentOff = 20;
let salePrice = originalPrice * (percentOff / 100);

// rest of our program (maybe 100s of lines)
console.log(salePrice);

var price = 20;
var isSale = true;

// variable shadowing
// let & const - block-scoped
if (isSale) {
  // discount price of product
  let price = 20 - 2; 
  // do something 
  console.log('sale price', price);
}

console.log('price', price);
