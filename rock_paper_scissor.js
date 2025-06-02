let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let random = Math.random() * 10;
    if (random <= 3) {
        return "Rock";
    }
    else if (random <= 6) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

function getHumanChoice(){
    return prompt("Select: Rock, Paper or Scissor");
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice) {
        return playRound(getHumanChoice(), getComputerChoice());
    }
    else if(humanChoice == "Rock"){
        if (computerChoice == "Paper") {
            computerScore += 1;
            //return "You lose! Paper beats Rock";
        }
        else{
            humanScore += 1;
            //return "You win! Rock beats Scissor";
        }
    }
    else if(humanChoice == "Paper"){
        if (computerChoice == "Scissor") {
            computerScore += 1;
            //return "You lose! Scissor beats Paper";
        }
        else{
            humanScore += 1;
            //return "You win! Paper beats Rock";
        }
    }
    else{
        if (computerChoice == "Rock") {
            computerScore += 1;
            //return "You lose! Rock beats Scissor";
        }
        else{
            humanScore += 1;
            //return "You win! Scissor beats Paper";
        }
    }
    return;
}

function playGame(){
    for(let i=0; i<5; i++){
        playRound(getHumanChoice(), getComputerChoice())
    }
    if(humanScore > computerScore){
        return `You win! your score is ${humanScore} and computer score is ${computerScore}`;
    }
    else{
        return `You lose! your score is ${humanScore} and computer score is ${computerScore}`;
    }
}

console.log(playGame());
