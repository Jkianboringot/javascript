// lets make simple game, a rock paper scissor game, for 20mins

const prompt = require("prompt-sync")();

var exist = true;

const com = ["paper", "rock", "scissor"];

const randomIndex = Math.floor(Math.random() * com.length);

const compick = com[randomIndex];

while (exist) {
    
const randomIndex = Math.floor(Math.random() * com.length);

const compick = com[randomIndex];
  let input = prompt("input(paper, rock, scissor): ");

  if (input === "0") {
    var exist = false;
    console.log('exist')
  }
  
    console.log(`user:${input}, computer:${compick}`)

  if (input === "paper" && compick === "rock") {
    console.log("user wins");
  } else if (input === "rock" && compick === "scissor") {
    console.log("user wins");
  }
  else if (input === "scissor" && compick === "paper") {
    console.log("user wins");
  }
  else if (input ===  compick ) {
    console.log("tie");
  }
  else{
    console.log('computer wins')
  }
}
