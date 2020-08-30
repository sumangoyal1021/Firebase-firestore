

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

  function save(){


  var Name = document.getElementById("name").value;
  var Id = document.getElementById("id").value;
 
  // Overwite the Data
  firebase.database().ref('data').set({name:Name, id:Id});
  
  // Append the Data and create unique key
  firebase.database().ref('data').push({name:Name, id:Id});

  firebase.database().ref('data').on('value',(snap)=>{
  console.log(snap.val());
  });
}

