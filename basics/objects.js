
const blue = '#00f';
const orange = '#f60';

// variables - boxes; objects - file cabinets
const colors = { yellow: '#ff0', blue, orange };
// objectName.key
console.log(colors.blue);

// const obj = {
//   sayHi() {
//     console.log('hi')  
//   }
// }

// obj.sayHi();
// objectName.methodName();


/*
  undefined, null, boolean, number, string, symbol
*/
// primitive - passed by value

// const num = 'hello world';
// const anotherNum = 'hello world';
// console.log(num === anotherNum);

// object - passed by reference
const obj = {};
const anotherObj = obj;
anotherObj.a = 1;

console.log('obj', obj);
console.log('another obj', anotherObj);



//get and modify object data
//const color = 'black';
const hexCode = '#000';

const colors = {
  'yellow Color': '#ff0',
  blue: "#f00",
  orange: "#f60",
  [color]: hexCode
};

colors[color] = hexCode;
// function getColor(key) {
//   return colors[key];
// }
delete colors.blue;
console.log(colors);
// console.log(getColor('orange'));

//Objects & Maps / Easy Property Acces With Destructuring

const user = {
  name: "Reed",
  username: "Reedbarger",
  email: "reed@gmail.com",
  details: {
    title: "Programmer"  
  }  
};

function displayUser(){

  console.log(`username: ${user.username}, email: ${user.email}`);

}

