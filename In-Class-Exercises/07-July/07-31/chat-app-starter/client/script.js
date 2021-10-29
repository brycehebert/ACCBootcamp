// ---------------------------------------------------------
// Select all HTML elements we will need for the project:  |
// ---------------------------------------------------------

// ------------- Nickname Elements We Need ------------------------------
// 1. Create a variable called "nickname" and select the div with the class
//	  "nickname"
const nickname = document.querySelector(".nickname");

// 2. Create a variable called "nicknameSubmit" and select the button with
//	  the class "nickname__submit"
const nicknameSubmit = document.querySelector(".nickname__submit");

// 3. Create a variable called "nicknameInput" and select the input with the
// 	  ID "nickname"
const nicknameInput = document.querySelector("#nickname");

// -------------- Chat Elements We Need ---------------------------------
// 1. Create a variable called "message" and select the input with the ID
//	  "messageInput"
const messageInput = document.querySelector("#messageInput");

// 2. Create a variable called "chatMessages" and select the div with the
//	  class "chat__messages"
const chatMessages = document.querySelector(".chat__messages");

// 3. Create a variable called "chatSubmit" and select the button with
//    the class "chat__submit"
const chatSubmit = document.querySelector(".chat__submit");

// Create new io instance:
const socket = io();

// ---------------------------------------------------------
//      Set a new nickname in the session storage object   |
// ---------------------------------------------------------

// If no nickname is set then display the nickname modal that covers the screen
if (!sessionStorage.getItem("nickname")) {
  nickname.style.display = "initial";
  nicknameSubmit.addEventListener("click", () => {
    sessionStorage.setItem("nickname", nicknameInput.value);
    nickname.style.display = "none";
    socket.emit("New User", sessionStorage.getItem("nickname"));
  });
}

// ------------------------------------
// Functions to create new messages:  |
// ------------------------------------

// Create a new user joined message
const userJoined = (nickname) => {
  let newUserDiv = document.createElement("div");
  newUserDiv.classList.add("chat__new-user-joined");
  newUserDiv.innerHTML = `<i>${nickname} has joined the chat</i>`;
  chatMessages.append(newUserDiv);
};

// Create a new message from a user
const newMessage = (message) => {
  let newMessageDiv = document.createElement("div");
  newMessageDiv.classList.add("chat__user-message");
  newMessageDiv.innerHTML = `<div class="chat__user-nickname">${message.nickname}</div>
                             <div class="chat__user-text">${message.message}</div>`;
  chatMessages.append(newMessageDiv);
};

// ------------------------------------
//          Socket Events             |
// ------------------------------------

// When the user clicks to send a new message emit that message and their nickname
chatSubmit.addEventListener("click", () => {
  socket.emit("New Message", {
    nickname: sessionStorage.getItem("nickname"),
    message: messageInput.value
  });
});

// When the socket receives a new message
socket.on("New Message", (message) => {
  console.log(message);
  newMessage(message);
});

// When the socket receives a new user
socket.on("New User", (nickname) => {
  console.log("New User Joined:", nickname);
  userJoined(nickname);
});

// Optimizations
// 1. Load all previous messages and users who joined
// 2. Add error handling so that users cannot enter empty nicknames or messages
// 3. Make it so that a user can press enter to send the message
// 4. Show when users disconnect from the chat
// 5. Allow users to pick their own color
// 6. InnerHTML is not a good way to insert new HTML. Try to find the appropriate way to do this
