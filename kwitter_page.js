var firebaseConfig = {
      apiKey: "AIzaSyB5WQcpUfvWp1LeTin9IgWSldNqHmIzzrE",
      authDomain: "kwitter-52568.firebaseapp.com",
      databaseURL: "https://kwitter-52568-default-rtdb.firebaseio.com",
      projectId: "kwitter-52568",
      storageBucket: "kwitter-52568.appspot.com",
      messagingSenderId: "708026083534",
      appId: "1:708026083534:web:3698cffd81fd331ba7889f"
    };

    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;



//End code
      } });  }); }
getData();
