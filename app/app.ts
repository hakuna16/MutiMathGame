/// <reference path="player.ts"/>
function startGame() {
  let playerName: string | undefined = getInputValue('playername');
  logPlayer(playerName);
  // starting a new game

  postScore(100, playerName)

  postScore(-100, playerName)
}

const logPlayer = (name: string = "Multi Map Player") =>
  console.log(`Player name is ${name}`);


const getInputValue = (id: string): string | undefined => {
  const element: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(id)
  );
  return element.value === "" ? undefined : element.value;
}

function postScore(score: number, playerName: String = "Multi Map Player"): void {

  let logger: (value: string) => void;
  if (score < 0) {
    logger = logError;
  } else {
    logger = logMessage;
  }

  const scoreElement: HTMLElement = <HTMLElement>document.getElementById('postedScores')
  scoreElement!.innerText = `${score}.....${playerName}`;

  logger(`Score: ${score}`)
}

document.getElementById("startGame")!.addEventListener("click", startGame);

const logMessage = (message: string) => console.log(message);

function logError(err: string) {
  console.error(err);
}

let firstPlayer: Player = new Player();
firstPlayer.name = "Rituj";
firstPlayer.age = 27;
console.log(firstPlayer.formatName());
