var firebaseConfig = {
    apiKey: "AIzaSyB5WQcpUfvWp1LeTin9IgWSldNqHmIzzrE",
    authDomain: "kwitter-52568.firebaseapp.com",
    databaseURL: "https://kwitter-52568-default-rtdb.firebaseio.com",
    projectId: "kwitter-52568",
    storageBucket: "kwitter-52568.appspot.com",
    messagingSenderId: "708026083534",
    appId: "1:708026083534:web:3698cffd81fd331ba7889f"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name;

    function addRoom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
            porpose:"adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
    }
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
