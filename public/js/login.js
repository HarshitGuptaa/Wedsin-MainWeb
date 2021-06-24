let loginBtn = document.querySelector(".btn");

let em = document.querySelector('input[type="email"]')
let pw = document.querySelector('input[type="password"]')


loginBtn.addEventListener("click",function(){
  email=em.value;
  password=pw.value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((cred) => {
    console.log("clicked");
    console.log(cred.user);
    window.location = 'index.html';
    setTimeout(alert( cred.user.email + " Signed in"), 0 );
    // alert("Signed in Successfully !")
    
  })
  .catch((error) => {
    var errorMessage = error.message;
    alert(errorMessage)
});

})