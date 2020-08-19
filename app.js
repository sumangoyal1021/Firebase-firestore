

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
     
  	var title = document.getElementById("fire").value;
  	var title1 = document.getElementById("fire1").value;



  	db.collection("one").doc("two").set({
     
     Name: title,
     Email: title1,
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
  };

  // const docRef = firestore.doc("samples/sandwichData");
  // const outputHeader = document.querySelector("#hotDogOutput");
  // const inputTextField = document.querySelector("#latestHotDogStatus");
  // const saveButton = document.querySelector("#saveButton");

  // saveButton.addEventListener("click", function(){
  // 	const textToSave = inputTextField.value;
  // 	console.log("I am going to save" + textToSave + "to Firestore");
  // 	docRef.set({
  // 		hotDogStatus: textToSave
  // 	}).then(function(){
  // 		console.log("status saved");
  // 	}).catch(function(error){
  // 		console.log("got an error:", error);
  // 	});
  // })