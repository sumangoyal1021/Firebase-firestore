

 var firebaseConfig = {
    apiKey: "AIzaSyAorwFms4cWXhmUjgVw7BczpG8n-BnYr3E",
    authDomain: "qcode-45886.firebaseapp.com",
    databaseURL: "https://qcode-45886.firebaseio.com",
    projectId: "qcode-45886",
    storageBucket: "qcode-45886.appspot.com",
    messagingSenderId: "278152110295",
    appId: "1:278152110295:web:6fc99954946d300755d092",
    measurementId: "G-8XGK7N4YFS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();


 function signUp(){

     var email = document.getElementById("email");
     var password = document.getElementById("password");

     const text = auth.createUserWithEmailAndPassword(email.value, password.value);
     text.catch(e => alert(e.message));
     alert("Signed up");

 }

  function signIn(){

     var email = document.getElementById("email");
     var password = document.getElementById("password");

     const text = auth.signInWithEmailAndPassword(email.value, password.value);
     text.catch(e => alert(e.message));
     alert("Signed in");

  }

    function signOut(){
    
    auth.signOut();
    alert("Successfully Signed Out")
  }

