const messages = [
  "You are my favorite chapter of life ❤️",
  "From friends to forever, I choose you 💍",
  "Every memory with you is my treasure ✨",
  "You + Me = Home 🏠💕"
];

function generateMsg() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("aiMsg").innerText = msg;
}
