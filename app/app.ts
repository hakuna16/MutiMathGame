function startGame() {
  let playerName = "Rituj";
  logPlayer(playerName);
  // starting a new game
  var messagesElement = document.getElementById("messages");
  messagesElement!.innerText = "Welcome to MultiMath! Starting new game...";
}

function logPlayer(name: string) {
  console.log(`Player name is ${name}`);
}
document.getElementById("startGame")!.addEventListener("click", startGame);
