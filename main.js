const opcoes = ["rock", "paper", "scissors"];

const outputPlayer = document.querySelector('.pPlayer');
outputPlayer.textContent = 0;

const outputComput = document.querySelector('.pComput');
outputComput.textContent = 0;

const outputPartidas = document.querySelector('.pPartidas');
outputPartidas.textContent = 0;

const h1 = document.querySelector('h1');

let player = 0, comput = 0, plays = 0;

function getComputerChoice(){
  return opcoes[Math.floor(Math.random() * 3)];
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let person = button.className;
    let pc = getComputerChoice();
    console.log(person, pc);
    if(plays <= 5) {
      result = play(person, pc)
      if(result == "vencedor"){
        addUmPlayer();
        game();
      } else if (result == "perdedor"){
        AddUmComput();
        game();
      }
      
       if (plays == 5 || Math.abs(player - comput) == 3 || (plays == 4 && Math.abs(player - comput) == 2)){
        if(player > comput){
          win();
        } else {
          lose()
        }
       }
    }
    console.log('jogos:'+plays, 'pontos player:'+player, 'pontos computador:'+comput);
  });
});


function play(playerSelection, computerSelection) {
  // let player = playerSelection;
  // player = player.toLowerCase();
  // let comput = computerSelection.toLowerCase();

  switch(playerSelection) {
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

function game() {
  plays+=1;
  outputPartidas.textContent = plays;
}

function win(){
  h1.textContent = `VOCÊ GANHOU DE ${player} X ${comput}`
  buttons.forEach(button => {
    button.disabled = true;
  });
  //player = 0, comput = 0, plays = 0;
  outputPlayer.textContent = player
  outputComput.textContent = comput;
}

function lose(){
  h1.textContent = `VOCÊ PERDEU DE ${player} X ${comput}`
  buttons.forEach(button => {
    button.disabled = true;
  });
  //player = 0, comput = 0, plays = 0;
  outputPlayer.textContent = player
  outputComput.textContent = comput;

}
function addUmPlayer(){
  player +=1; 
  outputPlayer.textContent = player
}

function AddUmComput(){
  comput+=1; 
  outputComput.textContent = comput;
}