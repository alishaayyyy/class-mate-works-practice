import { auth,signInWithEmailAndPassword,sendPasswordResetEmail , signOut} from "./auth.js";

let form = document.getElementById("form");

form.addEventListener("submit",(e)=>{
e.preventDefault();

let email = document.getElementById('email').value ;
let password = document.getElementById('password').value ;

console.log(email,password)

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
  });


})

let forgetPassword = document.getElementById('forget-password');
forgetPassword.addEventListener('click',(e)=>{
  e.preventDefault();

  
let email = document.getElementById('email').value ;
  //alert("working")

  sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("succesfull send an email to your account")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
})


// signout
let logout = document.getElementById('logout');
logout.addEventListener('click',(e)=>{

  signOut(auth).then(() => {
    alert('logout')
  }).catch((error) => {
    alert('error')
  });
})