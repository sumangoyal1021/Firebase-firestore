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

  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
         document.getElementById("user_div").style.display = "block";
         document.getElementById("login_div").style.display = "none";

         var user = firebase.auth().currentUser;

         if (user =! null) {
             var email_id = user.email;
             var email_verified = user.emailVerified;
             document.getElementById("user_para").innerHTML = "Welcome user :" + email_id + "<br/> Verified :" + email_verified;
         }
          }
          else {
            document.getElementById("user_div").style.display = "none";
            document.getElementById("login_div").style.display = "block";      
          }
  });

  function login(){
    var userEmail = document.getElementById("email_field").value;
    var userPassword = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error :" + errorMessage);
    });
  }

  function create_account() {
    var userEmail = document.getElementById("email_field").value;
    var userPassword = document.getElementById("password_field").value;
 
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error :" + errorMessage);
    });

  } 


  function logout(){
    firebase.auth().signOut();
  }

  function send_verification() {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
      window.alert("Verification Sent");
    }).catch(function(error) {
      window.alert("Error :" + errorMessage);
    });
  }