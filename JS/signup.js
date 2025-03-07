import { auth, createUserWithEmailAndPassword } from "./auth.js";

let form = document.getElementById("form");

form.addEventListener("submit",(e)=>{
e.preventDefault();

let email = document.getElementById('email').value ;
let password = document.getElementById('password').value ;

//console.log(email,password)

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
    // ..
  });


})