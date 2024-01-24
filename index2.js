// Rock Paper Scissors



const choices= ["rock", "paper","scissors"];
const playerDisplay= document.getElementById("playerDisplay")
const computerDisplay= document.getElementById("computerDisplay")
const resultDisplay=document.getElementById("resultDisplay")
const playerscoredisplay= document.getElementById("playerScoreDisplay")
const computerscoredisplay= document.getElementById("computerScoreDisplay")

let player=0;
let computer=0;

function playGame(playerChoice){

  const computerChoice = choices[Math.floor(Math.random()*3)];
 let result= "";


 if(playerChoice === computerChoice){
  result= "IT'S A TIE!" 
 }
 else{
  switch(playerChoice){
    case "rock":
      result = (computerChoice==="scissors") ?  "YOU WIN!" : "YOU LOSE!"
      break;
    case "paper":
      result = (computerChoice==="rock") ?  "YOU WIN!" : "YOU LOSE!"
      break;
     case "scissors":
      result = (computerChoice==="paper") ?  "YOU WIN!" : "YOU LOSE!"
      break;
  }
 }
 playerDisplay.textContent= `PLAYER: ${playerChoice}`;
 computerDisplay.textContent= `COMPUTER: ${computerChoice}`;
 resultDisplay.textContent = result;

 resultDisplay.classList.remove("greenText","redText")
 
 switch(result){
  case "YOU WIN!":
    resultDisplay.classList.add("greenText");
    player++;
    playerscoredisplay.textContent = player

    break;

  case "YOU LOSE!":
    resultDisplay.classList.add("redText");
    computer++;
    computerscoredisplay.textContent = computer

    break;
}
}
