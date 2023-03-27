const opcoes = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
  console.log(opcoes[Math.floor(Math.random() * 3)]);
}