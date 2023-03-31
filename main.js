const opcoes = ["rock", "paper", "scissors"];

function getComputerChoice(){
  return opcoes[Math.floor(Math.random() * 3)];
}

function play(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let comput = computerSelection.toLowerCase();

  switch(player) {
    case "rock":
      if(computerSelection == "rock"){
        return 'empate';
      } else if(computerSelection == "scissors"){
        return 'vencedor'
      } else {
        return 'perdedor'
      }

    case "paper":
      if(computerSelection == "rock"){
        return 'vencedor';
      } else if(computerSelection == "scissors"){
        return 'perdedor'
      } else {
        return 'empate'
      }

    case "scissors":
      if(computerSelection == "rock"){
        return 'perdedor';
      } else if(computerSelection == "scissors"){
        return 'empate'
      } else {
        return 'vencedor'
      }

    default:
        return "palavra errada";
  }
}

function resWin(){
  return 
}

function resLose(){
  return 
}