/*Object destructuring allows us to pull properties from an object and make them into variables:

//const { username, email } = user;
//We destructure nested objects as follows:

const { name, details: { title} } = user;
*/

const user1 = {
    name: "Alexis",
    username: "alexrom",
    email: "alexrom@gmail.com",
    details: {
      title: "Programmer"  
    } 
};


//const { title } = user.details
//const { name }  = user; 
//const { name, details: { } } = user;

const user = {
  name: "Alexis",
  username: "alexrom",
  email: "alexrom@gmail.com",
  details: {
    title: "Programmer"  
  } 
};


function displayUserBio({ name, details: { title} }) {
  console.log(`${name} is a ${title}`); 
}

displayUserBio(user);
displayUserBio(user);


const { username, email } = user;

function displayUser() {
    console.log(`username: ${user.username}, email: ${email}`);
}

displayUser()

//Destructuring with functions

