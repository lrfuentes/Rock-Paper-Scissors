let humanScore = 0;
let computerScore = 0;
let btns = document.querySelectorAll('button');
let score = document.getElementById('score');
let user_score = document.getElementById('user');
let pc_score = document.getElementById('pc');
btns.forEach((btn) => {
    btn.addEventListener('click', playRound);
});

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

function playRound(event){
    let humanChoice = event.target.innerText;
    let computerChoice = getComputerChoice();
    if (humanChoice == computerChoice) {
        computerScore += 1;
        humanScore += 1;
    }
    else if(humanChoice == "Rock"){
        if (computerChoice == "Paper") {
            computerScore += 1;
        }
        else{
            humanScore += 1;
        }
    }
    else if(humanChoice == "Paper"){
        if (computerChoice == "Scissor") {
            computerScore += 1;
        }
        else{
            humanScore += 1;
        }
    }
    else{
        if (computerChoice == "Rock") {
            computerScore += 1;
        }
        else{
            humanScore += 1;
        }
    }
    user_score.textContent = humanScore;
    pc_score.textContent = computerScore;
    if(humanScore == 5 || computerScore == 5){
        let winner = document.createElement('p');
        winner.textContent = `${humanScore == 5 ? "You win!":"PC win!"}`;
        score.appendChild(winner);
        btns.forEach((btn) => {
            btn.removeEventListener('click', playRound);
        });
        humanScore = 0;
        computerScore = 0;
    }
    return;
}
