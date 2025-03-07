
import { db,collection, addDoc  } from './auth.js';

const add = document.getElementById('add');
add.addEventListener('click', async (e)=>{
e.preventDefault();


const newUser = {
Name : document.getElementById('Name').value ,
LastName : document.getElementById('LastName').value,
AvailableHours : document.getElementById('Available').value,
Age: document.getElementById('Age').value
} 

//console.log(newUser.Name)


try {
  const docRef = await addDoc(collection(db, "Users"), newUser);

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}


})