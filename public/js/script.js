// const { default: axios } = require("axios");
// const axios = require('axios');
let db = firebase.firestore();

let signup = document.querySelector(".register .btn");
// let loginBtn = document.querySelector(".login .btn");

let em = document.querySelector("#email");
let pw = document.querySelector("#pw");

signup.addEventListener("click",function(){
    console.log(em.value)
    console.log(pw.value)
    email=em.value;
    password=pw.value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((cred) => {
    // Signed in 
    alert("Signed up");

    db.collection('users').doc(cred.user.uid).set({
        Email: email,
        Gender: document.querySelector("#gender").value ,
        Mobile: document.querySelector("#mob").value
    })
    // var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    // var errorCode = error.code;
    console.log(error.message);
    // ..
  });
})


// loginBtn.addEventListener("click",async function(e){
//   // e.preventDefault();
//   // window.location.href = "/login.html";
//   try{
//     e.preventDefault();
//     console.log("clicked")
//     let obj = await axios.get("http://localhost:3000/login");
//     console.log(obj);

//   }
//   catch(err){
//     console.log(err)
//   }
// })
