/*
githubtwitter
Object.assign() allows us to merge properties from two or more objects into a new object:

Object.assign({}, user, newUser)
However, this is not very intuitive or readable. A cleaner way of doing this is to use the spread operator (...):
*/


const user = {
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: ""  
  };
  
  const newUser = {
    username: "ReedBarger",
    email: "reed@gmail.com",
    password: "mypassword"  
  };
//Object are passed by reference NOT by value
  //console.log(Object.assign({},user, newUser));
  //console.log(user)

  //Object Spread

  const createdUser = { ...user, ...newUser, verified: false };
  console.log(createdUser);
// console.log(Object.assign({}, user, newUser, { verified: false }));
