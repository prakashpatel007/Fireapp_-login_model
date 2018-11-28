var app_FireBase ={};
(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAghJX8BZWAhF0LoFa39b9HqdT4XLuAda0",
    authDomain: "fireapp-ee148.firebaseapp.com",
    databaseURL: "https://fireapp-ee148.firebaseio.com",
    projectId: "fireapp-ee148",
    storageBucket: "fireapp-ee148.appspot.com",
    messagingSenderId: "755897661584"
  };
  firebase.initializeApp(config);
app_FireBase = firebase
})()