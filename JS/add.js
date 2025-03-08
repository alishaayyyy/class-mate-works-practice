
import { db,collection, addDoc ,getDocs,deleteDoc,doc,getDoc,updateDoc } from './auth.js';

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


// getting all documents in once 
// const Reading = await getDocs(collection(db, "Users"));
// Reading.forEach((doc) => {
//   let final = doc.data();
//   console.log(doc.id)
// });

// single document 

async function getData (){
  try{
const Reading = await getDocs(collection(db,"Users"));
let html = "";
Reading.forEach((doc)=>{

  const data = doc.data()
html += `<p>Document Id: ${doc.id} , Document name: ${data.Name}, Document name: ${data.Age} 
  <button class="del-btn" onclick="DelBtn('${doc.id}')">Delete</button> 
  <button class="upd-btn" onclick="UpdBtn('${doc.id}')">Update</button> 
</p>`
})
document.getElementById("main").innerHTML=html;

  }catch(error){
alert(error)
  }
}

getData()



// deleted functionnnn
window.DelBtn = async function(id){
 try{
     deleteDoc(doc(db,"Users",id))
     alert("deleted")
 }catch(error){
alert(error)
 }
}

// Update function 

window.UpdBtn = async function(id){
try{

const docSnapShot = await getDoc(doc(db,"Users",id))
const currentUser = docSnapShot.data()

document.getElementById('Name').value = currentUser.Name;
document.getElementById('LastName').value = currentUser.LastName;
document.getElementById('Available').value = currentUser.AvailableHours;
document.getElementById('Age').value = currentUser.Age;

const update = document.getElementById("Upd")
update.addEventListener("click",async function(){
  const newName = document.getElementById('Name').value ;
  const newLastName = document.getElementById('LastName').value ;
  const newAge = document.getElementById('Age').value ;
  const newHours = document.getElementById('Available').value ;

  if(newName !== null){
    await updateDoc(doc(db,"Users",id),{
Name : newName,
LastName : newLastName,
AvailableHours : newHours,
Age: newAge
    }) 
  }
  alert("sucess")
  document.getElementById('Name').value ="" ;
document.getElementById('LastName').value = "";
document.getElementById('Available').value = "";
document.getElementById('Age').value ="";
})

}catch(error){
alert("error")
}
}

