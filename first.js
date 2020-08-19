

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
  var db = firebase.firestore();

    function saveButton(){
     
    var title = document.getElementById("text_field").value;
    var title1 = document.getElementById("email_field").value;


    db.collection("users").doc().set({
     
     name: title,
     email: title1,
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
  };

  var list_div = document.getElementById("list_div");
    
    db.collection("users").onSnapshot(function(snapshot) {

      snapshot.docChanges().forEach(function(change){
         if(change.type === "added"){
        list_div.innerHTML += "<div><h5>" + change.doc.data().name + "</h5><p>" + change.doc.data().email + "</p></div>"

         }

      });
      

});


