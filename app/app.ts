function startGame() {
  const messageElement = document.getElementById("message");
  messageElement!.innerText = "Welcome to multimath game application";
}

document.getElementById("startGame")!.addEventListener("click", startGame);
