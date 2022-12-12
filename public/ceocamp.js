const firebaseConfig = {
  apiKey: "AIzaSyBj_lbiPWwueQUBqWEspc6r1JBn5dTmOS4",
  authDomain: "chat-with-very-angry-subbny.firebaseapp.com",
  databaseURL:
    "https://chat-with-very-angry-subbny-default-rtdb.firebaseio.com",
  projectId: "chat-with-very-angry-subbny",
  storageBucket: "chat-with-very-angry-subbny.appspot.com",
  messagingSenderId: "1767764096",
  appId: "1:1767764096:web:9dbf8dd94215b0116f3665",
  measurementId: "G-NC44JNRLD1",
};
firebase.initializeApp(firebaseConfig);
database = firebase.database();

function sendMsg() {
  let date = new Date();
  let msg = $("#message").val();
  database.ref("msgs/" + date.getTime()).set(msg);
  $("#message").val("");
}

function loadMsgs() {
  database.ref("msgs").on("value", callback);
  function callback(snapshot) {
    $("#chatlist").html("");

    snapshot.forEach(function (child) {
      $("#chatlist").append(
        "<div class='chat-container'><span class='chatMsg'>" +
          child.val() +
          "</span></div>"
      );
    });
    $("#chatlist").scrollTop(15000);
  }
}
